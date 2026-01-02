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
import { useStorage } from "@/hooks/use-storage"
import { LanguageOptionList } from "./lib/language-option-list"
import { useTranslation } from "react-i18next"
import { useEffect } from 'react';
import { Language, isLanguage } from '@/types/language';
import { getOptionByLanguage } from '@/components/feature/language/lib/utils';


export const LanguageSelect = () => {
    const { t, i18n } = useTranslation("common", { keyPrefix: "screen.settings.language" });
    const [language, setLanguage] = useStorage<Language>("lang", "en");

    useEffect(() => {
      if (!language) return;
      i18n.changeLanguage(language);
    }, [language]);

    function handleOnValueChange(option: Option) {
      if (!option) return;

      const { value } = option;
      if (isLanguage(value)) {
        i18n.changeLanguage(value);
        setLanguage(value);
      }
    }

    return (
        <Select value={getOptionByLanguage(language!)} onValueChange={handleOnValueChange} >
            <SelectTrigger>
                <SelectValue placeholder={t("placeholder")} />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>{t("title")}</SelectLabel>
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