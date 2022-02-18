export interface ContainerProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    scrollViewStyle?: StyleProp<ViewStyle>;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
