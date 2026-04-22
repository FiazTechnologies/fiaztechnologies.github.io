import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation';
import { Providers } from './providers';
import { useContactForm } from '@/hooks/use-contact';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, MailSendIcon, CheckmarkCircle01Icon, AlertCircleIcon } from '@hugeicons/core-free-icons';

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const mutation = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    mutation.mutate(result.data, {
      onSuccess: () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
    });
  };

  const inputClass = 'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground';
  const errorClass = 'mt-1.5 text-xs text-destructive flex items-center gap-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">Name</label>
          <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
          {errors.name && <p className={errorClass}><HugeiconsIcon icon={AlertCircleIcon} size={12} />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">Email</label>
          <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
          {errors.email && <p className={errorClass}><HugeiconsIcon icon={AlertCircleIcon} size={12} />{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">Subject</label>
        <input id="contact-subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="How can we help?" className={inputClass} />
        {errors.subject && <p className={errorClass}><HugeiconsIcon icon={AlertCircleIcon} size={12} />{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
        {errors.message && <p className={errorClass}><HugeiconsIcon icon={AlertCircleIcon} size={12} />{errors.message}</p>}
      </div>
      <button type="submit" disabled={mutation.isPending} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 sm:w-auto">
        {mutation.isPending ? 'Sending...' : 'Send Message'}
        <HugeiconsIcon icon={MailSendIcon} size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
      {mutation.isSuccess && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} /> {mutation.data?.message}
        </div>
      )}
      {mutation.isError && (
        <div className="flex items-center gap-2 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <HugeiconsIcon icon={AlertCircleIcon} size={16} /> Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}

export function ContactPage() {
  return (
    <Providers>
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Contact Us</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s build something together</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s discuss how we can help.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <HugeiconsIcon icon={Mail01Icon} size={32} className="text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">Email Us</h3>
                  <p className="mt-2 text-sm text-muted-foreground">For business inquiries and project discussions</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="mt-3 inline-flex text-sm font-medium text-primary hover:underline">{SITE_CONFIG.email}</a>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-lg font-semibold">Response Time</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We typically respond within 24 hours during business days. For urgent inquiries, please mention it in the subject.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-lg font-semibold">What to Include</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Project scope and timeline</li>
                    <li>• Budget range (if applicable)</li>
                    <li>• Technical requirements</li>
                    <li>• Preferred technology stack</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Providers>
  );
}
