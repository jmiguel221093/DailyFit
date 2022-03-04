import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Text } from '../Text';

import Styles from './ScreenOptionField.styles';
import type {
    ScreenOptionFieldProps,
    ScreenOptionProps,
} from './ScreenOptionField.props';

import { Container, Option } from './components';

const ScreenOption = ({
    onSelectOption,
    options,
    label,
    selectedOption,
    style,
    optionStyle,
    optionsContainerStyle,
}: ScreenOptionFieldProps) => {
    const containerStyle: ViewStyle[] = [];
    if (style) containerStyle.push(style);

    const handleSelectOption = (value: string) => {
        if (onSelectOption) onSelectOption(value);
    };

    const renderOption = (option: ScreenOptionProps, index: number) => (
        <Option
            key={`screen-option-field-option-${index}`}
            icon={option.icon}
            label={option.label}
            style={optionStyle}
            isSelected={option.value === selectedOption}
            onSelect={() => option.value && handleSelectOption(option.value)}
        />
    );

    return (
        <View style={containerStyle}>
            {label && <Text style={Styles.label}>{label}</Text>}
            <Container style={optionsContainerStyle}>
                {options &&
                    options.map((option, index) => renderOption(option, index))}
            </Container>
        </View>
    );
};

export default ScreenOption;
