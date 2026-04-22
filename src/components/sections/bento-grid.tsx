import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrainIcon,
  CloudServerIcon,
  SourceCodeIcon,
  Globe02Icon,
  SmartPhone01Icon,
} from '@hugeicons/core-free-icons';
import type { IconSvgElement } from '@hugeicons/react';

const BENTO_ITEMS: {
  title: string;
  description: string;
  icon: IconSvgElement;
  className: string;
  gradient: string;
  iconColor: string;
}[] = [
  {
    title: 'AI Solutions',
    description:
      'Intelligent automation, ML models, and AI-driven tools for smarter business decisions.',
    icon: AiBrainIcon,
    className: 'sm:col-span-2 sm:row-span-2',
    gradient: 'from-violet-500/10 to-purple-500/10',
    iconColor: 'text-violet-500',
  },
  {
    title: 'SaaS Platforms',
    description: 'Scalable multi-tenant platforms built for growth.',
    icon: CloudServerIcon,
    className: '',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Developer Tools',
    description: 'CLIs, SDKs, and tooling that developers love.',
    icon: SourceCodeIcon,
    className: '',
    gradient: 'from-emerald-500/10 to-green-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences with native feel.',
    icon: SmartPhone01Icon,
    className: '',
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Web Systems',
    description: 'High-performance web platforms and real-time apps.',
    icon: Globe02Icon,
    className: '',
    gradient: 'from-pink-500/10 to-rose-500/10',
    iconColor: 'text-pink-500',
  },
];

export function BentoGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Core Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build and scale
          </h2>
          <p className="mt-4 text-muted-foreground">
            From AI-powered intelligence to production-grade platforms, we
            deliver end-to-end solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENTO_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg ${item.className}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${item.iconColor}`}
                >
                  <HugeiconsIcon icon={item.icon} size={20} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
