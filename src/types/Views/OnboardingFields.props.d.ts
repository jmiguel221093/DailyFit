export interface FieldProps {
    title: string;
    onContinue?: (value: string | number, key: string) => void;
}

export interface ImageFieldProps extends FieldProps {
    onOpenImagePicker?: () => void;
    onChange?: (image: string) => void;
    image?: string;
}

export interface SizePickerFieldProps extends FieldProps {
    onChange?: (value: number) => void;
    value?: number;
    items?: number[];
    name?: string;
    pickerMark?: string;
}
