import { spacingFoundations } from '../foundations';
import { scaleSize } from './mixins';

type SpacingSize = keyof typeof spacingFoundations;

const spacingSizeConverter = (size: SpacingSize = 'regular') =>
    scaleSize(spacingFoundations[size]);

export default spacingSizeConverter;
