import { View, TextInput } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { color } from '../../styles';

import Styles from './TextField.styles';
import type { TextFieldProps } from './TextField.props';

const TextField = ({
    disabled,
    label,
    style,
    size = 'medium',
    ...rest
}: TextFieldProps) => {
    const containerStyles = [Styles.container];
    const textFieldStyles: StyleProp<ViewStyle> = [Styles.textField];
    if (style) containerStyles.push(style);
    if (size === 'large') textFieldStyles.push(Styles.textFieldLarge);
    return (
        <View style={containerStyles}>
            {label && <Text style={Styles.label}>{label}</Text>}
            <View style={Styles.inputContainer}>
                <TextInput
                    {...rest}
                    style={textFieldStyles}
                    editable={!disabled}
                    placeholder={rest.placeholder}
                    placeholderTextColor={color('black', '60')}
                />
            </View>
        </View>
    );
};

export default TextField;
