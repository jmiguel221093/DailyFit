import type { TabsPageItemProps } from '../../TabsPage.props';

export interface TabsHeaderProps {
    tabs: TabsPageItemProps[];
    selectedTab?: string;
    onSelectTab?: (key: string) => void;
}
