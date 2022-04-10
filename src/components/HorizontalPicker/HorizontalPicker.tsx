import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import type {
    NativeScrollEvent,
    NativeSyntheticEvent,
    LayoutChangeEvent,
} from 'react-native';

import { Text } from '../Text';

import validateProps from './utils';
import Styles from './HorizontalPicker.styles';
import type { HorizontalPickerProps } from './HorizontalPicker.props';

const HorizontalPicker = ({
    initialValue,
    itemsSize,
    itemWidth,
    onChange,
    startsFrom = 0,
}: HorizontalPickerProps) => {
    validateProps({ itemsSize, itemWidth });
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [items, setItems] = useState<number[]>([]);
    const [currentItem, setCurrentItem] = useState<number>(0);
    const scrollViewRef = useRef<ScrollView | null>(null);

    useEffect(() => {
        if (containerWidth > 0) {
            const calculatedOffset = Math.floor(
                Math.ceil(containerWidth / itemWidth) / 2
            );
            setOffset(calculatedOffset);
            setItems(
                Array.from(Array(itemsSize + calculatedOffset * 2).keys())
            );
        }
    }, [containerWidth]);

    const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        setCurrentItem(Math.ceil(e.nativeEvent.contentOffset.x / itemWidth));
    };

    const handleOnChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (onChange) {
            onChange(
                Math.ceil(e.nativeEvent.contentOffset.x / itemWidth) +
                    startsFrom
            );
        }
    };

    useEffect(() => {
        if (
            scrollViewRef.current &&
            initialValue &&
            containerWidth &&
            itemWidth &&
            offset &&
            items
        ) {
            console.log((initialValue - startsFrom) * itemWidth);
            scrollViewRef.current.scrollTo({
                x: (initialValue - startsFrom) * itemWidth,
            });
        }
    }, [
        scrollViewRef.current,
        initialValue,
        containerWidth,
        itemWidth,
        offset,
        items,
    ]);

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
            {index > offset - 1 && index < items.length - offset && (
                <>
                    <Text
                        style={{
                            ...Styles.itemText,
                            /* eslint-disable no-extra-parens */
                            ...(index - offset === currentItem
                                ? Styles.selectedItemText
                                : {}),
                        }}
                    >
                        {item + startsFrom - offset}
                    </Text>
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
                    {index - offset === currentItem && (
                        <Text
                            style={{
                                position: 'absolute',
                                top: -6,
                                right: -15,
                                fontSize: 12,
                            }}
                        >
                            cm
                        </Text>
                    )}
                </>
            )}
        </View>
    );

    const handleLayout = (e: LayoutChangeEvent) => {
        setContainerWidth(e.nativeEvent.layout.width);
    };

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
            onLayout={handleLayout}
        >
            {items.map(renderItem)}
        </ScrollView>
    );
};

export default HorizontalPicker;
