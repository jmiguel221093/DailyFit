export interface HorizontalPickerProps {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    items: any[];
    value?: number;
    onChange?: (value: number) => void;
    itemsOnScreen?: number;
}
