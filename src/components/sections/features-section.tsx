import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Shield01Icon,
  CloudServerIcon,
  DashboardSpeedIcon,
  Recycle01Icon,
} from '@hugeicons/core-free-icons';
import type { IconSvgElement } from '@hugeicons/react';

const FEATURES: { icon: IconSvgElement; title: string; description: string; color: string }[] = [
  {
    icon: Shield01Icon,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant practices, encrypted data at rest and in transit, and role-based access control built into every platform.',
    color: 'text-emerald-500',
  },
  {
    icon: DashboardSpeedIcon,
    title: 'Lightning Fast',
    description: 'Sub-second load times, optimized database queries, and CDN-backed delivery ensure your users get the best experience.',
    color: 'text-blue-500',
  },
  {
    icon: CloudServerIcon,
    title: '99.9% Uptime',
    description: 'Highly available architectures with auto-scaling, health checks, and zero-downtime deployments keep your product always online.',
    color: 'text-violet-500',
  },
  {
    icon: Recycle01Icon,
    title: 'Continuous Delivery',
    description: 'Automated CI/CD pipelines with staging environments, automated testing, and one-click production deploys.',
    color: 'text-orange-500',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Production-grade from the start
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every project we deliver meets the highest standards of security, performance, and reliability.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20"
            >
              <div className="shrink-0">
                <HugeiconsIcon icon={feature.icon} size={28} className={feature.color} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
