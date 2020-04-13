import { useEffect, useState } from 'react';

const usePersistingTheme = () => {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem('theme');
    return stickyValue ? JSON.parse(stickyValue) : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default usePersistingTheme;
