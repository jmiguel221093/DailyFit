import { typographySizeFoundations } from '../foundations';
import { scaleFont } from './mixins';

type FontSize = keyof typeof typographySizeFoundations;

const fontSize = (size: FontSize = 'body'): number =>
    scaleFont(typographySizeFoundations[size]);

export default fontSize;
