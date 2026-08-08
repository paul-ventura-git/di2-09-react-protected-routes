import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />

      <label className="form-check-label">
        {theme === 'dark'
          ? 'Dark Mode'
          : 'Light Mode'}
      </label>
    </div>
  );
}