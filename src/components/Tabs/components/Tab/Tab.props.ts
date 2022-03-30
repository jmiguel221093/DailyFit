import type { TextStyle, ViewStyle } from 'react-native';

export interface TabProps {
    style?: ViewStyle;
    tabStyles?: {
        notLastTab: ViewStyle;
        tabActive: ViewStyle;
        tabText: TextStyle;
    };
    isSelected?: boolean;
    isLast?: boolean;
    onPress?: (id: string) => void;
    id: string;
    title: string;
}
