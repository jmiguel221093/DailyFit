import { StyleSheet } from 'react-native';

import type { LayoutProps } from './Layout.props';

export default ({ direction, align, justify }: LayoutProps) =>
    StyleSheet.create({
        container: {
            flex: direction === 'column' ? 1 : 0,
            flexDirection: direction,
            alignItems: align,
            justifyContent: justify,
            flexWrap: 'wrap',
        },
    });
