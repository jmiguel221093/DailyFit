import { Children } from 'react';
import { ScrollView, Pressable, View } from 'react-native';
import type { ViewStyle } from 'react-native';

import { ResourceItem } from '../ResourceItem';
import Styles from './ResourceList.styles';
import type { ResourceListProps } from './ResourceList.props';

const ResourceList = ({
    items,
    onSelectItem,
    renderItem,
    style,
}: ResourceListProps) => {
    const itemsExist = items && items.length > 0;
    const containerStyles: ViewStyle[] = [];
    if (style) containerStyles.push(style);

    const handleSelectItem = (index: number) => {
        if (onSelectItem) onSelectItem(index);
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const renderItemComponent = (item: any, index: number) => {
        const itemContent: React.ReactElement = renderItem(item, index);
        if (itemContent.type !== ResourceItem) {
            /* eslint-disable no-console */
            console.warn(
                `ResourceList: renderItem must return a ResourceItem component`
            );
        }
        return itemContent;
    };

    const listMarkup = itemsExist
        ? /* eslint-disable indent */
          Children.toArray(
              items.map((item, i) => (
                  <Pressable
                      key={`resource-list-render-item-${i}`}
                      onPress={() => handleSelectItem(i)}
                  >
                      {renderItemComponent(item, i)}
                  </Pressable>
              ))
          )
        : null;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={Styles.container}
        >
            <View style={containerStyles}>{listMarkup}</View>
        </ScrollView>
    );
};

export default ResourceList;
