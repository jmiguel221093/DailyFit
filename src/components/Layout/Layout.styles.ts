import { StyleSheet } from 'react-native';

import type { LayoutProps } from './Layout.props';

export default ({ direction, align, justify }: LayoutProps) =>
    StyleSheet.create({
        container: {
            flexDirection: direction,
            alignItems: align,
            justifyContent: justify,
            flexWrap: 'wrap',
        },
    });
