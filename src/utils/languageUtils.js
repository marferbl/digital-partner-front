// Utility functions for language management
export const changeLanguage = (i18n, newLanguage) => {
    // Save to localStorage
    localStorage.setItem('digitalando_language', newLanguage);

    // Change the language in i18n
    i18n.changeLanguage(newLanguage);
};

export const getStoredLanguage = () => {
    return localStorage.getItem('digitalando_language') || 'es';
};

export const toggleLanguage = (i18n) => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(i18n, newLanguage);
}; 