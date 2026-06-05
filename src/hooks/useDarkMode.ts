import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio_theme';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = storedTheme ? storedTheme === 'dark' : defaultDark;
    setIsDarkMode(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.toggle('dark', isDarkMode);
    body.classList.toggle('dark', isDarkMode);
    localStorage.setItem(STORAGE_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
}

export default useDarkMode;
