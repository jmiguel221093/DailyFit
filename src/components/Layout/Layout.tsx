import { View } from 'react-native';

import Styles from './Layout.styles';
import type { LayoutProps } from './Layout.props';

const Layout = ({
    children,
    direction = 'column',
    align,
    justify,
    style,
}: LayoutProps) => (
    <View
        style={[
            Styles({
                direction,
                align,
                justify,
            }).container,
            style,
        ]}
    >
        {children}
    </View>
);

export default Layout;
