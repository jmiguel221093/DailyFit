import type { ViewStyle } from 'react-native';

export interface LayoutItemProps {
    flex?: number;
    flexShrink?: number;
    flexGrow?: number;
    flexBasis?: number;
    style?: ViewStyle;
    children?: React.ReactNode;
}
