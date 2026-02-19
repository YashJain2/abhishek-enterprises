import { useTheme } from '@/context/ThemeContext'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className={styles.track}>
        <span className={styles.thumb} data-dark={isDark}>
          <span className={styles.icon} aria-hidden>
            {isDark ? '☀' : '☾'}
          </span>
        </span>
      </span>
      <span className={styles.label}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
