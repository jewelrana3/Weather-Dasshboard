import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef();

  function debounceCallback(...args) {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debounceCallback;
};

export default useDebounce;
