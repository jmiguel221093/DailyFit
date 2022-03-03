import { View, TouchableWithoutFeedback } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Icon } from '../../Icon';
import { Text } from '../../Text';

import Styles from '../ScreenOptionField.styles';
import type { ScreenOptionProps } from '../ScreenOptionField.props';
import { color, scaleSize } from '../../../styles';

const Option = ({
    icon,
    label,
    style,
    isSelected,
    onSelect,
}: ScreenOptionProps) => {
    const containerStyle: ViewStyle[] = [Styles.option];
    const iconContainerStyles: ViewStyle[] = [Styles.optionIconContainer];
    if (isSelected) {
        containerStyle.push(Styles.optionContainerSelected);
        iconContainerStyles.push(Styles.optionIconContainerSelected);
    }
    if (style) containerStyle.push(style);

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={containerStyle}>
                {icon && (
                    <View style={iconContainerStyles}>
                        <Icon
                            name={icon}
                            size={scaleSize(30)}
                            color={color(isSelected ? 'primary' : 'white')}
                        />
                    </View>
                )}
                {label && (
                    <Text type="heading" style={Styles.optionLabel}>
                        {label}
                    </Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Option;
