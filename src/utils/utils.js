export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    // Regex from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url#answer-3809435
    // eslint-disable-next-line
    let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (!rules) {
        return true;
    }

    if (rules.required) {
        if (typeof value === 'object') {
            isValid = value.length > 0 && isValid;
        } else {
            isValid = value.trim() !== '' && isValid;
        }
    }

    if (rules.website) {
        const isWebsite = regex.test(value);
        isValid = isWebsite && isValid;
    }

    return isValid;
};

export const getInitialLetters = string => {
    const splitString = string.split(' ');
    const firstNameInitialLetter = splitString[0] ? splitString[0][0].toUpperCase() : '';
    const lastNameInitialLetter = splitString.length > 1 ? splitString[splitString.length - 1][0].toUpperCase() : '';
    return firstNameInitialLetter + lastNameInitialLetter;
};