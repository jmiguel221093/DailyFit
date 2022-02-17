import { typography } from '../foundations';

type FontTypes = keyof typeof typography;

const font = (type: FontTypes = 'regular') => typography[type];

export default font;
