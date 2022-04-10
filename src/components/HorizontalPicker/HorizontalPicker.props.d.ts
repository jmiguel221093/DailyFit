export interface HorizontalPickerProps {
    itemsSize: number;
    startsFrom?: number;
    initialValue?: number;
    onChange?: (value: number) => void;
    itemWidth: number;
}
