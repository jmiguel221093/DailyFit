import { typographyFoundations } from '../foundations';

type FontTypes = keyof typeof typographyFoundations;

const font = (type: FontTypes = 'regular') => typographyFoundations[type];

export default font;
