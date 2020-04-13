import { useEffect } from 'react';

export default (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
