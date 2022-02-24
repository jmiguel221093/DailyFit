import type { ViewStyle } from 'react-native';

export interface LayoutProps {
    children?: React.ReactNode;
    direction?: 'row' | 'column';
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    style?: ViewStyle;
}
