import {
    type Option,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LanguageOptionList } from "./lib/language-option-list"
import { useTranslation } from "react-i18next"
import { useStorage } from '@/hooks/use-storage';
import { getOptionByLanguage } from './lib/utils';
import { Language } from '@/types/language';

export const LanguageSelect = () => {
    const { t, i18n } = useTranslation("screen.settings.language");
    const [language, setLanguage] = useStorage<Language>("language", "en");

    const handleOnValueChange = (option: Option) => {
      if (!option) return;

      const { value } = option;
      i18n.changeLanguage(value as Language);
      setLanguage(value as Language);
    }

    return (
        <Select value={getOptionByLanguage(language)} onValueChange={handleOnValueChange} >
            <SelectTrigger>
                <SelectValue placeholder={t("placeholder")} />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>{t("description")}</SelectLabel>
                    {LanguageOptionList.map(lang => (
                        <SelectItem key={lang.value} label={lang.label} value={lang.value}>
                            {lang.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}