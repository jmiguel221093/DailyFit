import { useState, useRef } from 'react';
import { TouchableWithoutFeedback, Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import type { Event } from '@react-native-community/datetimepicker';
import moment from 'moment';

import { TextField } from '../TextField';

import { DatePickeriOS } from './components/DatePickeriOS';
import type { DateFieldProps } from './DateField.props';

const DateField = ({
    label,
    date,
    placeholder,
    style,
    size,
    onChange,
    onOpen,
}: DateFieldProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const momentDate = useRef<moment.Moment | null>(null);

    if (date) {
        momentDate.current = moment(date);
        momentDate.current.locale('es-mx');
    }

    const handleOnDateChange = (event: Event, dateVal?: Date) => {
        if (Platform.OS === 'android') setIsVisible(false);
        if (onChange && dateVal) onChange(dateVal);
    };

    const handleOnPress = () => {
        if (Platform.OS === 'android') setIsVisible(true);
        if (Platform.OS === 'ios' && onOpen) onOpen();
    };

    return (
        <>
            <View style={style}>
                <TextField
                    editable={false}
                    disabled
                    label={label}
                    placeholder={placeholder}
                    value={
                        momentDate.current
                            ? momentDate.current.format('DD / MM / YYYY')
                            : ''
                    }
                    size={size}
                />
                <TouchableWithoutFeedback onPress={handleOnPress}>
                    <View
                        style={{
                            flex: 1,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                    ></View>
                </TouchableWithoutFeedback>
            </View>
            {isVisible && Platform.OS === 'android' && (
                <DateTimePicker
                    display="spinner"
                    value={
                        new Date(
                            !date
                                ? moment().subtract(18, 'years').toISOString()
                                : date
                        )
                    }
                    onChange={handleOnDateChange}
                />
            )}
        </>
    );
};

DateField.DatePickeriOS = DatePickeriOS;

export default DateField;
