import { LANGUAGES } from './constants.js';

export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const dateToString = (date) => {
    return new Date(date).toLocaleDateString('en-GB')
}

export const languageLabelFromValue = (value) => {
    return LANGUAGES.find(e => e.value === value)?.label
}

