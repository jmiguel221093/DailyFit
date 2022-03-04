const isValidValue = (value: string, validation: RegExp) =>
    validation.test(value);

export default isValidValue;
