import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );
  console.log(value, storageKey);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
