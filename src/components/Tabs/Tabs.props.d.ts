export type TabType = {
    id: string;
    title: string;
};

export interface TabsProps {
    tabs: TabType[];
    panelsContent: T[];
    selectedTab?: string;
    onTabChange?: (tabId: string) => void;
    renderPanel: (tabContent: T, index: number) => React.ReactElement;
}
