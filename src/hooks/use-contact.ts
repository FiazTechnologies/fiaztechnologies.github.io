import { useMutation } from '@tanstack/react-query';
import type { z } from 'zod';
import type { contactFormSchema } from '@/lib/validation';

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactResponse {
  success: boolean;
  message: string;
}

const WEB3FORMS_ACCESS_KEY = '9a0fe9f2-5b83-47c0-9718-4f6de327c6b3';

async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('subject', data.subject);
  formData.append('message', data.message);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to send message');
  }

  return {
    success: true,
    message: 'Thank you for your message! We will get back to you shortly.',
  };
}

export function useContactForm() {
  return useMutation({
    mutationFn: submitContactForm,
  });
}
