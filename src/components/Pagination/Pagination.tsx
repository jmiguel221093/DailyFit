import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import Styles from './Pagination.styles';
import type { PaginationProps } from './Pagination.props';

const Pagination = ({
    itemsLength,
    currentItem,
    style,
    itemStyle,
}: PaginationProps) => {
    const containerStyles = [Styles.container];
    if (style) containerStyles.push(style);

    const renderItem = (index: number) => {
        const styles: ViewStyle[] = [Styles.item];
        if (index === currentItem) styles.push(Styles.activeItem);
        if (index === itemsLength - 1) styles.push(Styles.lastItem);
        if (itemStyle) styles.push(itemStyle);
        return <View key={`Pagination-Item-${index}`} style={styles}></View>;
    };

    return (
        <View style={containerStyles}>
            {[...Array(itemsLength).keys()].map((i) => renderItem(i))}
        </View>
    );
};

export default Pagination;
