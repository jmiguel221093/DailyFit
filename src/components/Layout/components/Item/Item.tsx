import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import type { LayoutItemProps } from './Item.props';

const Item = ({ children, style, flex }: LayoutItemProps) => {
    const styles: ViewStyle[] = [
        {
            flex,
        },
    ];
    if (style) styles.push(style);

    return <View style={styles}>{children}</View>;
};

export default Item;
