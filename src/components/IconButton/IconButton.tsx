import { View, TouchableWithoutFeedback } from 'react-native';

import { Icon } from '../Icon';

import Styles from './IconButton.styles';
import type { IconButtonProps } from './IconButton.props';

const IconButton = ({ icon, onPress, style }: IconButtonProps) => {
    const containerStyles = [Styles.container];
    if (style) containerStyles.push(style);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={containerStyles}>
                <Icon name={icon} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default IconButton;
