export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const dateToString = (date) => {
    return new Date(date).toLocaleDateString('en-GB')
}

