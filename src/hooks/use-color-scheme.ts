import { useColorScheme as useNativeColorScheme } from "nativewind"
import { useStorage } from '@/hooks/use-storage';
import { ColorScheme } from '@/types/scheme';

const COLOR_SCHEME_KEY = 'color-scheme';

export const useColorScheme = () => {
  const { colorScheme, setColorScheme: setNativeColorScheme } = useNativeColorScheme();
  const [savedColorScheme, setSavedColorScheme] = useStorage<ColorScheme>(COLOR_SCHEME_KEY, colorScheme ?? "light");

  const setColorScheme = (scheme: ColorScheme) => {
    setNativeColorScheme(scheme);
    setSavedColorScheme(scheme);
  }

  const toggleColorScheme = () => {
    const next = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(next);
  }

  return {
    colorScheme: savedColorScheme,
    setColorScheme,
    toggleColorScheme,
  };
};

