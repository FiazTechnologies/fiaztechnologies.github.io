import { motion } from 'framer-motion';
import { FOUNDER, SITE_CONFIG } from '@/lib/constants';
import { HugeiconsIcon } from '@hugeicons/react';
import { GithubIcon, LinkedinIcon, Globe02Icon, NewTwitterIcon, Target01Icon, EyeIcon, HeartCheckIcon, FlashIcon } from '@hugeicons/core-free-icons';
import type { IconSvgElement } from '@hugeicons/react';

const values: { icon: IconSvgElement; title: string; description: string }[] = [
  { icon: Target01Icon, title: 'Developer-First', description: 'Everything we build starts with the developer experience. Clean APIs, great docs, and tools that just work.' },
  { icon: EyeIcon, title: 'Innovation-Driven', description: 'We leverage cutting-edge AI and modern technology stacks to deliver solutions that set new standards.' },
  { icon: HeartCheckIcon, title: 'Quality Obsessed', description: 'Every line of code is crafted with care. We ship production-grade systems with 99.9% reliability.' },
  { icon: FlashIcon, title: 'Speed & Scale', description: 'Built for performance from day one. Our systems handle millions of requests without breaking a sweat.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5 },
};

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About Us</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Building the future of software</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{SITE_CONFIG.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">To empower developers and businesses worldwide with intelligent, scalable, and production-ready software solutions. We believe in making cutting-edge technology accessible to everyone.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">To become the leading force in AI-powered development tools and SaaS innovation, creating an ecosystem where developers can build, deploy, and scale with unprecedented speed and quality.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-muted-foreground">The principles that guide everything we build.</p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/20">
                <HugeiconsIcon icon={v.icon} size={32} className="text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Founder</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-12 max-w-md">
            <div className="rounded-2xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
              <img src={FOUNDER.avatar} alt={FOUNDER.name} className="mx-auto h-24 w-24 rounded-full border-2 border-border object-cover" loading="lazy" />
              <h3 className="mt-4 text-xl font-bold">{FOUNDER.name}</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Passionate about building developer tools, AI solutions, and scalable software that makes a difference in the world.</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href={FOUNDER.github} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent" aria-label="GitHub"><HugeiconsIcon icon={GithubIcon} size={16} /></a>
                <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent" aria-label="LinkedIn"><HugeiconsIcon icon={LinkedinIcon} size={16} /></a>
                <a href={FOUNDER.twitter} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent" aria-label="Twitter"><HugeiconsIcon icon={NewTwitterIcon} size={16} /></a>
                <a href={FOUNDER.portfolio} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent" aria-label="Portfolio"><HugeiconsIcon icon={Globe02Icon} size={16} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
