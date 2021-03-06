import { View, TextInput } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { IconButton } from '../IconButton';
import { color } from '../../styles';

import Styles from './TextField.styles';
import type { TextFieldProps } from './TextField.props';

const TextField = ({
    disabled,
    label,
    style,
    size = 'medium',
    action,
    inputContainerStyle,
    ...rest
}: TextFieldProps) => {
    const containerStyles = [Styles.container];
    const inputContainerStyles: ViewStyle[] = [Styles.inputContainer];
    const textFieldStyles: StyleProp<ViewStyle> = [Styles.textField];
    if (style) containerStyles.push(style);
    if (inputContainerStyle) inputContainerStyles.push(inputContainerStyle);
    if (size === 'large') textFieldStyles.push(Styles.textFieldLarge);
    return (
        <View style={containerStyles}>
            {label && <Text style={Styles.label}>{label}</Text>}
            <View style={inputContainerStyles}>
                <TextInput
                    {...rest}
                    style={textFieldStyles}
                    editable={!disabled}
                    placeholder={rest.placeholder}
                    placeholderTextColor={color('black', '60')}
                />
                {action && (
                    <IconButton
                        icon={action.icon}
                        onPress={action.onPress}
                        style={Styles.textFieldAction}
                    />
                )}
            </View>
        </View>
    );
};

export default TextField;
