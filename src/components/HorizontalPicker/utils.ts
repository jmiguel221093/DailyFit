import type { HorizontalPickerProps } from './HorizontalPicker.props';

const validateProps = ({
    itemsSize,
    itemWidth,
}: Partial<HorizontalPickerProps>) => {
    if (!itemsSize || itemsSize < 1) {
        throw new Error('itemsSize must be a positive number');
    }
    if (!itemWidth || itemWidth < 1) {
        throw new Error('itemWidth must be a positive number');
    }
};

export default validateProps;
