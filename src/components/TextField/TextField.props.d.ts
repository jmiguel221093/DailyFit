import type { TextInputProps } from 'react-native';
import type { IconActionProp } from '../../types';

export interface TextFieldProps extends TextInputProps {
    label?: string;
    style?: ViewStyle;
    error?: string;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    errorText?: string;
    size?: 'medium' | 'large';
    action?: IconActionProp;
}
