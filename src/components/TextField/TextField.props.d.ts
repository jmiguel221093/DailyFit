import type { TextInputProps } from 'react-native';

export interface TextFieldProps extends TextInputProps {
    label?: string;
    style?: ViewStyle;
    error?: string;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    errorText?: string;
    size?: 'medium' | 'large';
}
