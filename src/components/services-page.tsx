import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES } from '@/lib/constants';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrainIcon,
  CloudServerIcon,
  SourceCodeIcon,
  Globe02Icon,
  SmartPhone01Icon,
  CheckmarkCircle01Icon,
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

const ACCENT_COLORS = [
  { bg: 'bg-violet-500/10', text: 'text-violet-500', border: 'border-violet-500/20', gradient: 'from-violet-500/5 via-transparent to-transparent' },
  { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20', gradient: 'from-blue-500/5 via-transparent to-transparent' },
  { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20', gradient: 'from-emerald-500/5 via-transparent to-transparent' },
  { bg: 'bg-pink-500/10', text: 'text-pink-500', border: 'border-pink-500/20', gradient: 'from-pink-500/5 via-transparent to-transparent' },
  { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20', gradient: 'from-orange-500/5 via-transparent to-transparent' },
];

function ServiceSection({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const iconData = ICONS[service.icon];
  const colors = ACCENT_COLORS[index];
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative"
    >
      {/* Parallax background decoration */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y }}
      >
        <div className={`absolute ${isEven ? 'right-0' : 'left-0'} top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br ${colors.gradient} blur-[80px] opacity-60`} />
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        {/* Step indicator */}
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.bg} ${colors.text} text-sm font-bold`}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className={`h-px flex-1 bg-gradient-to-r ${colors.gradient}`} />
        </motion.div>

        <div className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${isEven ? '' : 'lg:direction-rtl'}`}>
          {/* Content side */}
          <motion.div
            className={isEven ? '' : 'lg:order-2'}
            style={{ direction: 'ltr' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text}`}>
              <HugeiconsIcon icon={iconData} size={28} />
            </div>
            <p className={`mt-4 text-sm font-medium uppercase tracking-widest ${colors.text}`}>
              {service.tagline}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {service.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a project
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Features side */}
          <motion.div
            className={isEven ? '' : 'lg:order-1'}
            style={{ direction: 'ltr' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={`rounded-2xl border ${colors.border} bg-card p-8`}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                What&apos;s Included
              </h3>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: fi * 0.05 }}
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      size={18}
                      className={`mt-0.5 shrink-0 ${colors.text}`}
                    />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              End-to-end development,{' '}
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                start to scale
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We don&apos;t just write code — we craft solutions. Each service is designed to
              solve real problems, built with production-grade quality, and backed by our
              99.9% delivery success rate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey intro */}
      <section className="border-y border-border bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-lg font-bold">5</span>
            </div>
            <div>
              <p className="text-lg font-semibold">Five core competencies, one unified vision</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Scroll through our service areas to see how we approach each domain
                with deep expertise and a commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service sections with parallax storytelling */}
      <div className="space-y-32 py-24">
        {SERVICES.map((service, i) => (
          <ServiceSection key={service.title} service={service} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to bring your idea to life?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether you need AI intelligence, a scalable SaaS platform, or a beautiful mobile app
              — let&apos;s talk about how we can make it happen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a Conversation
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
