import AsyncStorage from "@lib/async-storage"
import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook for using async storage in React components
 * 
 * @param key Storage key to use
 * @param initialValue Default value if key doesn't exist
 * @returns [value, setValue, loading, error]
 */
export function useStorage<T extends string>(
  key: string,
  initialValue: T | undefined = undefined
) {
  const [storedValue, setStoredValue] = useState<T | undefined>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        setLoading(true);
        setError(null);
        const value = await AsyncStorage.get<T>(key);
        setStoredValue(value ?? initialValue);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load from storage'));
      } finally {
        setLoading(false);
      }
    };

    loadStoredValue();
  }, [key, initialValue]);

  // Function to update storage and state
  const setValue = useCallback(
    async (value: T | undefined) => {
      try {
        setError(null);
        if (value === undefined) {
          setStoredValue(undefined);
        } else {
          await AsyncStorage.save(key, value!);
          setStoredValue(value);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to save to storage'));
        throw err;
      }
    },
    [key]
  );

  return [storedValue, setValue, loading, error] as const;
}
