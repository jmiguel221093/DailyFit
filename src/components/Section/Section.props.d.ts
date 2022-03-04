import type { ViewStyle } from 'react-native';
import type { IconActionProp } from '../../types';

export interface SectionProps {
    title?: string;
    children?: React.ReactNode;
    style?: ViewStyle;
    actions?: IconActionProp[];
}
