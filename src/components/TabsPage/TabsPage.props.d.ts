import type { ViewStyle } from 'react-native';

export type TabsPageItemProps = {
    title: string;
    id: string;
};

export interface TabsPageProps {
    tabs?: TabsPageItemProps[];
    selectedTab?: string;
    style?: ViewStyle;
    onSelectTab?: (id: string) => void;
    children?: React.ReactNode;
}
