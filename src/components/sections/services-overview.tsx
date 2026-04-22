import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrainIcon,
  CloudServerIcon,
  SourceCodeIcon,
  Globe02Icon,
  SmartPhone01Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';
import type { IconSvgElement } from '@hugeicons/react';

const ICONS: Record<string, IconSvgElement> = {
  brain: AiBrainIcon,
  cloud: CloudServerIcon,
  code: SourceCodeIcon,
  globe: Globe02Icon,
  smartphone: SmartPhone01Icon,
};

export function ServicesOverview() {
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
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Services that drive results
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end development services powered by cutting-edge technology
            and deep expertise.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => {
            const iconData = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={iconData} size={24} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground/80">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2"
                >
                  Learn more
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.slice(3).map((service, i) => {
            const iconData = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={iconData} size={24} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground/80">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2"
                >
                  Learn more
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
