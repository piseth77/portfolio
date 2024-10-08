import { LanguageKey } from '@/constants/localStorage';
import { EnglishLanguage } from '@/constants/app';

/**
 * Updates lang attribute based on language value from localStorage
 */
export function updateLangAttribute(): void {
    document.documentElement.setAttribute(
        'lang',
        localStorage.getItem(LanguageKey) ?? EnglishLanguage,
    );
}
