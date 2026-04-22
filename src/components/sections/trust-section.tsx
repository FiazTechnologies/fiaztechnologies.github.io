import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Globe02Icon } from '@hugeicons/core-free-icons';

export function TrustSection() {
  return (
    <section className="relative border-y border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <HugeiconsIcon icon={Globe02Icon} size={20} />
            <span className="text-sm font-medium uppercase tracking-widest">
              Trusted Worldwide
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Trusted by developers and startups across India &amp; beyond
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Building scalable, production-ready systems for teams across India
            and 10+ countries — from early-stage startups to growing enterprises.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { label: 'AI Models', icon: '🤖' },
            { label: 'SaaS Platforms', icon: '☁️' },
            { label: 'Dev Tools', icon: '⚡' },
            { label: 'Mobile Apps', icon: '📱' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/50 p-6 backdrop-blur-sm transition-colors hover:bg-accent/50"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
