import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { STATS } from '@/lib/constants';

function AnimatedCounter({ value, shouldAnimate }: { value: string; shouldAnimate: boolean }) {
  const [display, setDisplay] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);

  // Memoize the regex match so it doesn't trigger re-renders
  const parsed = useMemo(() => {
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) return null;
    return { target: parseFloat(match[1]), suffix: match[2], isFloat: match[1].includes('.') };
  }, [value]);

  useEffect(() => {
    // If it's not a numeric value (e.g. "24/7"), just show it directly
    if (!parsed) {
      setDisplay(value);
      return;
    }

    // Only animate once
    if (!shouldAnimate || hasAnimated) return;

    const { target, suffix, isFloat } = parsed;
    const duration = 2000;
    const startTime = performance.now();

    setHasAnimated(true);

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (progress < 1) {
        const formatted = isFloat ? current.toFixed(1) : Math.round(current).toString();
        setDisplay(`${formatted}${suffix}`);
        requestAnimationFrame(update);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(update);
  }, [shouldAnimate, hasAnimated, parsed, value]);

  return <span>{display}</span>;
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            By the Numbers
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Delivering excellence at scale
          </h2>
          <p className="mt-4 text-muted-foreground">
            Proven results across industries, from startups to enterprises across India and beyond.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative">
                <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <AnimatedCounter value={stat.value} shouldAnimate={isVisible} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
