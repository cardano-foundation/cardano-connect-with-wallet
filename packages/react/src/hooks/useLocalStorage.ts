import { useState, useEffect } from 'react';

const useLocalStorage = (keyName: string, defaultValue: any) => {
  const getVariableFromLocalStorage = () => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getVariableFromLocalStorage);

  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  useEffect(() => {
    const storageEventHandler = () => {
      setStoredValue(getVariableFromLocalStorage());
    };

    window.addEventListener('storage', storageEventHandler);

    return () => window.removeEventListener('storage', storageEventHandler);
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorage;
