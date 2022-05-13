import type { ImageSourcePropType, ImageStyle } from 'react-native';

export interface ThumbnailProps {
    source: ImageSourcePropType;
    size?: 'medium' | 'huge';
    style?: ImageStyle;
}
