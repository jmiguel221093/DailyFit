export interface ContainerProps {
    children?: React.ReactNode;
    /**
     *  Accepts only a ViewStyle object. Arrays are not supported.
     */
    style?: ViewStyle;
    /**
     *  Accepts only a ViewStyle object. Arrays are not supported.
     */
    scrollViewStyle?: ViewStyle;
    /**
     * Specifies weather the container should be scrollable.
     */
    hasScroll?: boolean;
    /**
     * If the container is scrollable, this prop can be passed to trigger scroll event.
     */
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
