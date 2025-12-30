import { useColorScheme } from "@/hooks/use-color-scheme";
import { Button } from "../core/button";
import { Icon } from "../core/icon";
import { Text } from "../core/text";
import { useTranslation } from "react-i18next";

export const ThemeToggle = () => {
  const { colorScheme,  toggleColorScheme, colorIcon } = useColorScheme();
  const { t } = useTranslation("common", { keyPrefix: "screen.settings.theme.options" })

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="lg"
      variant="ghost"
      className="ios:size-9 web:mx-4"
    >
      <Icon as={colorIcon} className="size-5" />
      <Text>{colorScheme === 'dark' ? t("dark") : t("light")}</Text>
    </Button>
  );
};
