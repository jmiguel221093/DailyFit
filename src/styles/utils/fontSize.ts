import { typographySize } from '../foundations';
import { scaleFont } from './mixins';

type FontSize = keyof typeof typographySize;

const fontSize = (size: FontSize = 'body'): number =>
    scaleFont(typographySize[size]);

export default fontSize;
