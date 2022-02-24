import type { ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps {
    text: string;
    primary?: boolean;
    clean?: boolean;
    destructive?: boolean;
    link?: boolean;
    size?: 'small' | 'regular' | 'large';
    disabled?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}
