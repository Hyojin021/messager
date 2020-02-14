const numericValidator = (char) => /[0-9]{1}/.test(char);
const lowerCaseValidator = (char) => /[a-z]{1}/.test(char);
const upperCaseValidator = (char) => /[A-Z]{1}/.test(char);
const textValidator = (char) => /^[a-zA-Z '-]{1}/.test(char);
const anyValidator = (char) => true;
const numberRangeValidator = (maxValue, char) => numericValidator(char) && parseInt(char, null) <= maxValue;
export const neverValidator = (char) => false;
export const maskDigitValidators = {
    'a': lowerCaseValidator,
    'A': upperCaseValidator,
    'T': textValidator,
    '*': anyValidator
};
for (let i = 0; i <= 9; i++) {
    maskDigitValidators[i] = numberRangeValidator.bind(undefined, i);
}
//# sourceMappingURL=digit-validators.js.map