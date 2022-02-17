import { spacing } from '../foundations';
import { scaleSize } from './mixins';

type SpacingSize = keyof typeof spacing;

const spacingSizeConverter = (size: SpacingSize = 'regular') =>
    scaleSize(spacing[size]);

export default spacingSizeConverter;
