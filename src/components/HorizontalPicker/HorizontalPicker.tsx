import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import type {
    NativeScrollEvent,
    NativeSyntheticEvent,
    LayoutChangeEvent,
} from 'react-native';

import { Text } from '../Text';

import Styles from './HorizontalPicker.styles';
import type { HorizontalPickerProps } from './HorizontalPicker.props';

const HorizontalPicker = ({
    value = 0,
    items,
    itemsOnScreen = 5,
    onChange,
}: HorizontalPickerProps) => {
    const [currentItem, setCurrentItem] = useState<number>(value);
    const [itemWidth, setItemWidth] = useState<number>(0);
    const scrollViewRef = useRef<ScrollView | null>(null);

    const offset = Math.floor(itemsOnScreen / 2);

    const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        setCurrentItem(Math.ceil(e.nativeEvent.contentOffset.x / itemWidth));
    };

    const handleOnChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (onChange) {
            onChange(Math.ceil(e.nativeEvent.contentOffset.x / itemWidth));
        }
    };

    useEffect(() => {
        if (scrollViewRef.current && value) {
            scrollViewRef.current.scrollTo({
                x: (currentItem - (offset - 2)) * itemWidth,
            });
        }
    }, [itemWidth]);

    const renderItem = (item: number, index: number) => (
        <View
            key={`horizontal-picker-item-${index}`}
            style={[
                {
                    width: itemWidth,
                },
                Styles.itemContainer,
            ]}
        >
            {item && (
                <>
                    <View
                        style={{
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                ...Styles.itemText,
                                /* eslint-disable no-extra-parens */
                                ...(index - offset === currentItem
                                    ? Styles.selectedItemText
                                    : {}),
                            }}
                        >
                            {item}
                        </Text>
                        {/* {index - offset === currentItem && (
                            <Text
                                style={{
                                    fontSize: 12,
                                    opacity: 1,
                                    marginTop: -10,
                                    marginRight: -10,
                                }}
                            >
                                cm
                            </Text>
                        )} */}
                    </View>
                    <View style={Styles.indicatorContainer}>
                        <View
                            style={{
                                ...Styles.indicator,
                                ...(index - offset === currentItem
                                    ? Styles.selectedIndicator
                                    : {}),
                            }}
                        />
                    </View>
                </>
            )}
        </View>
    );

    const handleScrollViewLayout = (e: LayoutChangeEvent) => {
        setItemWidth(Math.ceil(e.nativeEvent.layout.width / itemsOnScreen));
    };

    const itemsToRender = [
        ...Array.from({ length: offset }, () => null),
        ...items,
        ...Array.from({ length: offset }, () => null),
    ];

    return (
        <ScrollView
            ref={scrollViewRef}
            pagingEnabled
            horizontal
            decelerationRate={itemWidth}
            snapToInterval={itemWidth || 0}
            snapToOffsets={items.map((item) => item * itemWidth)}
            onScroll={handleOnScroll}
            scrollEventThrottle={itemWidth || 0}
            onMomentumScrollEnd={handleOnChange}
            onLayout={handleScrollViewLayout}
        >
            {itemsToRender.map(renderItem)}
        </ScrollView>
    );
};

export default HorizontalPicker;
