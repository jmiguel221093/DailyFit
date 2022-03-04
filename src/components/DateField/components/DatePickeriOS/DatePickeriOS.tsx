import { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import type { ActionProp } from '../../../../types';

import { BottomActions } from '../../../BottomActions';
import type { DatePickeriOSProps } from './DatePickeriOS.props';

require('moment/min/locales.js');

const DatePickeriOS = ({
    date,
    onSelect,
    onCancel,
    open,
    primaryActionText,
    secondaryActionText,
}: DatePickeriOSProps) => {
    const [selectedDate, setSelectedDate] = useState<Date>(
        date || moment().subtract(18, 'years').toDate()
    );

    useEffect(() => {
        if (date && selectedDate !== date) setSelectedDate(date);
    }, [date]);

    const handleOnDateChange = (event: Event, dateVal?: Date) => {
        if (dateVal) setSelectedDate(dateVal);
    };

    const handleSelectDate = () => {
        if (onSelect) onSelect(moment(selectedDate).format('YYYY-MM-DD'));
    };

    const primaryAction: ActionProp = {
        text: primaryActionText || '',
        onPress: handleSelectDate,
    };
    const secondaryAction: ActionProp = {
        text: secondaryActionText || '',
        onPress: () => onCancel && onCancel(),
    };

    const dateTimePickerMarkup = (
        <DateTimePicker
            display="spinner"
            value={selectedDate}
            themeVariant="dark"
            onChange={handleOnDateChange}
        />
    );
    return (
        <BottomActions
            open={open}
            content={dateTimePickerMarkup}
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
        />
    );
};

export default DatePickeriOS;
