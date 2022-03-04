import type * as Icons from './icons';

export interface IconProps {
    name: keyof typeof Icons;
    strokeWidth?: number;
    style?: ViewStyle;
    width?: number;
    height?: number;
    size?: number;
    color?: string;
}
