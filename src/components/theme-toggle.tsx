import { useUIStore } from '@/store/ui-store';
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun02Icon } from '@hugeicons/core-free-icons';
import { useEffect } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useUIStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={`transition-all duration-300 ${
          theme === 'dark'
            ? 'rotate-90 scale-0 opacity-0 absolute'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        <HugeiconsIcon icon={Sun02Icon} size={16} />
      </span>
      <span
        className={`transition-all duration-300 ${
          theme === 'light'
            ? '-rotate-90 scale-0 opacity-0 absolute'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        <HugeiconsIcon icon={Moon02Icon} size={16} />
      </span>
    </button>
  );
}
