import type { HorizontalPickerProps } from './HorizontalPicker.props';

const validateProps = ({
    items,
    itemWidth,
}: Partial<HorizontalPickerProps>) => {
    if (!items || items.length < 1) {
        throw new Error('items must be a non empty array');
    }
    if (!itemWidth || itemWidth < 1) {
        throw new Error('itemWidth must be a positive number');
    }
};

export default validateProps;
