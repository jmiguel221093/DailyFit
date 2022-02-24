import { View, ScrollView } from 'react-native';

import type { ContainerProps } from './Container.props';
import Styles from './Container.styles';

const Container = ({
    children,
    style,
    scrollViewStyle,
    onScroll,
    hasScroll,
}: ContainerProps) => (
    <View style={[Styles.container, style]}>
        {hasScroll ? (
            <ScrollView
                style={[Styles.scrollView, scrollViewStyle]}
                showsVerticalScrollIndicator={false}
                onScroll={onScroll}
            >
                {children}
            </ScrollView>
        ) : (
            <>{children}</>
        )}
    </View>
);

export default Container;
