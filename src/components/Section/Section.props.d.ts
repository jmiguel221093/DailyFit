import type { ViewStyle } from 'react-native';

export interface SectionProps {
    title?: string;
    children?: React.ReactNode;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    onPressActions?: () => void;
}
