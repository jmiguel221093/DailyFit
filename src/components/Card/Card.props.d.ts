import type { ViewStyle } from 'react-native';

export interface CardProps {
    children?: React.ReactNode;
    title?: string;
    size?: 'small' | 'medium' | 'large';
    style?: ViewStyle;
}
