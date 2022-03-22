import { View, TouchableWithoutFeedback } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Icon } from '../Icon';

import Styles from './IconButton.styles';
import type { IconButtonProps } from './IconButton.props';

const IconButton = ({ icon, onPress, style, destructive }: IconButtonProps) => {
    const containerStyles: ViewStyle[] = [Styles.container];
    if (style) containerStyles.push(style);
    if (destructive) containerStyles.push(Styles.destructive);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={containerStyles}>
                <Icon name={icon} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default IconButton;
