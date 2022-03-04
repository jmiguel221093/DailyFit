import type { ImageSourcePropType } from 'react-native';

export interface ThumbnailProps {
    source: ImageSourcePropType;
    size?: 'medium' | 'huge';
}
