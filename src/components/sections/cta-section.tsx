import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to build something amazing?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Let&apos;s turn your vision into a production-ready reality. From AI solutions to full-stack platforms, we&apos;re here to help.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]">
                Start a Project
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="/services" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]">
                View Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
