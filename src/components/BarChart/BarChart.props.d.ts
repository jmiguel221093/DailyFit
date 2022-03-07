import type { ColorPropType, ViewStyle } from 'react-native';

export type BarChartItemProps = {
    size: number;
    color?: ColorPropType;
    gradientColor?: ColorPropType[];
};

export interface BarChartProps {
    data?: BarChartItemProps[];
    slotColor?: ColorPropType;
    style?: ViewStyle;
    pivot?: number;
}
