import type { ViewStyle } from 'react-native';
import type { Icons } from '../Icon';

export type ContainerProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};

export type ScreenOptionProps = {
    label?: string;
    value?: string;
    icon?: keyof typeof Icons;
    style?: ViewStyle;
    isSelected?: boolean;
    onSelect?: () => void;
};

export interface ScreenOptionFieldProps {
    label?: string;
    options: ScreenOptionProps[];
    onSelectOption: (value: string) => void;
    selectedOption?: string;
    style?: ViewStyle;
    optionsContainerStyle?: ViewStyle;
    optionStyle?: ViewStyle;
}
