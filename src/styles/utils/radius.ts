import { radiusFoundations } from '../foundations';
import { scaleSize } from './mixins';

type RadiusSize = keyof typeof radiusFoundations;

const radiusSize = (size: RadiusSize = 'small') =>
    scaleSize(radiusFoundations[size]);

export default radiusSize;
