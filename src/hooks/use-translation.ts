import { useTranslation as useReactTranslation } from 'react-i18next';

export function useTranslation(prefix: string) {
  return useReactTranslation('common', { keyPrefix: prefix });
}