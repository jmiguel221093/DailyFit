import { View, ScrollView } from 'react-native';

import type { ContainerProps } from './Container.props';
import Styles from './Container.styles';

const Container = ({
    children,
    style,
    scrollViewStyle,
    onScroll,
}: ContainerProps) => (
    <View style={[Styles.container, style]}>
        <ScrollView
            style={[Styles.scrollView, scrollViewStyle]}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
        >
            {children}
        </ScrollView>
    </View>
);

export default Container;
