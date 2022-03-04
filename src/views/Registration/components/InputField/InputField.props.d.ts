import type { TextFieldProps, Icons } from '../../../../components';
import type { IconActionProp } from '../../../../types';

interface InputFieldProps extends TextFieldProps {
    onContinue?: (value: string, id: string) => void;
    id: string;
    type?: 'date' | 'text' | 'screen-option';
    onOpenDatePicker?: () => void;
    date?: string;
    validation?: RegExp;
    options?: {
        label: string;
        value: string;
        icon?: keyof typeof Icons;
    }[];
    action?: IconActionProp;
}
