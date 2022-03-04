import { Image } from 'react-native';
import type { ImageStyle } from 'react-native';

import Styles from './Thumbnail.styles';
import type { ThumbnailProps } from './Thumbnail.props';

const Thumbnail = ({ source, size = 'medium' }: ThumbnailProps) => {
    const styles: ImageStyle[] = [Styles.default];
    switch (size) {
        case 'huge':
            styles.push(Styles.huge);
            break;
        default:
            styles.push(Styles.medium);
            break;
    }

    return <Image style={styles} source={source} />;
};

export default Thumbnail;
