export interface TabPageProp {
    title: string;
    selected: boolean;
    isLastItem?: boolean;
    onPress: () => void;
}
