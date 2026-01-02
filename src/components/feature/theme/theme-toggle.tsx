import { Button } from "@ui/button";
import { Icon } from "@ui/icon";
import { Text } from "@ui/text";
import { useTranslation } from 'react-i18next';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';

const icons = {
  light: SunIcon,
  dark: MoonStarIcon,
};

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { t } = useTranslation("screen.settings.theme.options");

  return (
    <Button onPress={toggleColorScheme} size="lg" variant="ghost" className="ios:size-9 web:mx-4">
      <Icon as={icons[colorScheme ?? "light"]} className="size-5" />
      <Text>{colorScheme === 'dark' ? t('dark') : t('light')}</Text>
    </Button>
  );
};
