export interface ResourceItemProps {
    children?: React.ReactNode;
    onPress?: (id: string) => void;
    id: string;
    isLastChild?: boolean;
}
