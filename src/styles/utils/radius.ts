import { radius } from '../foundations';
import { scaleSize } from './mixins';

type RadiusSize = keyof typeof radius;

const radiusSize = (size: RadiusSize = 'small') => scaleSize(radius[size]);

export default radiusSize;
