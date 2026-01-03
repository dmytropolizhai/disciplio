import { Button } from '@ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Text } from '@ui/text';

export const TodoAddButton = () => {
  const t = useTranslation("share.button.todo-add-button");

  return (
    <Button>
      <Text>{t("label")}</Text>
    </Button>
  )
}