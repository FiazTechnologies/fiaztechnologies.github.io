import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/constants';

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  Language: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  Backend: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'AI/ML': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
  Database: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  Cloud: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  DevOps: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  API: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
};

export function TechStackSection() {
  return (
    <section className="py-24 border-y border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built with modern technologies
          </h2>
          <p className="mt-4 text-muted-foreground">
            We use the best tools in the industry to deliver high-quality, scalable solutions.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${CATEGORY_COLORS[tech.category] || 'bg-muted text-foreground border-border'}`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
