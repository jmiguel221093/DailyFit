const STRING = ''.constructor;
const ARRAY = [].constructor;
const OBJECT = {}.constructor;
const NUMBER = (0).constructor;

/**
 *  Returns the type of the given object.
 *
 * @param {null | undefined | boolean | string | object | number} object The object to check.
 * @returns {string} The type of the given object.
 */
function whatIsIt(
    object: null | undefined | boolean | string | object | number
): string {
    if (object === null) {
        return 'null';
    }
    if (object === undefined) {
        return 'undefined';
    }
    if (object === true || object === false) {
        return 'boolean';
    }
    if (object.constructor === NUMBER) {
        return 'number';
    }
    if (object.constructor === STRING) {
        return 'string';
    }
    if (object.constructor === ARRAY) {
        return 'array';
    }
    if (object.constructor === OBJECT) {
        return 'object';
    }
    return 'unknown';
}

export default whatIsIt;
