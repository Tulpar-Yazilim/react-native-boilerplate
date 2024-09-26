import {useEffect, useState} from 'react';

function useDebounce<T>(value: T, delay?: number, callBack?: (_text: T) => void): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      callBack?.(value);
    }, delay ?? 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
