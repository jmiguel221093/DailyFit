/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResourceListProps<TItemType = any> {
    items: TItemType[];
    renderItem: (item: TItemType, index: number) => React.ReactElement;
    onSelectItem?: (index: number) => void;
    style?: ViewStyle;
}
