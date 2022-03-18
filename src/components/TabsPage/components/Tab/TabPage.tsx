import { View, Pressable } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';

import { Text } from '../../../Text';

import Styles from './Tab.styles';
import type { TabPageProp } from './TabPage.props';

const TabPage = ({
    title,
    selected = false,
    isLastItem,
    onPress,
}: TabPageProp) => {
    const containerStyles: ViewStyle[] = [Styles.container];
    let styles: TextStyle = Styles.text;
    const indicatorStyles: ViewStyle[] = [Styles.indicator];
    if (selected) {
        styles = { ...styles, ...Styles.selected };
        indicatorStyles.push(Styles.indicatorSelected);
    }
    if (isLastItem) containerStyles.push(Styles.lastItem);

    return (
        <Pressable style={containerStyles} onPress={onPress}>
            <Text type="displayMedium" style={styles}>
                {title}
            </Text>
            <View style={indicatorStyles} />
        </Pressable>
    );
};

export default TabPage;
