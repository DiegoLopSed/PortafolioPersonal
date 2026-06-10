import { useTheme } from '@/hooks/useTheme';
import { IconMoon, IconSun } from '@/components/icons/Icons';
import './ThemeToggle.scss';

/**
 * Toggle de tema claro/oscuro con persistencia en localStorage.
 */
export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
}
