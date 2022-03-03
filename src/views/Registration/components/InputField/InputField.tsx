import moment from 'moment';
import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import {
    TextField,
    Margin,
    Button,
    DateField,
    ScreenOptionField,
} from '../../../../components';
import { Locales, isValidValue } from '../../../../utils';

import type { InputFieldProps } from './InputField.props';

const InputField = ({
    label,
    placeholder,
    onContinue,
    id,
    type,
    onOpenDatePicker,
    date,
    validation,
    options,
    ...rest
}: InputFieldProps) => {
    const [value, setValue] = useState<string>('');
    const [dateVal, setDateVal] = useState<Date>();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (date) {
            setDateVal(moment(date).toDate());
        }
    }, [date]);

    useEffect(() => {
        if (validation && !isValidValue(value, validation)) {
            setError(true);
        } else {
            setError(false);
        }
    }, [value]);

    const handleOnContinue = () => {
        Keyboard.dismiss();
        let valueToSend = '';
        if (type === 'date') {
            valueToSend = moment(dateVal).format('YYYY-MM-DD');
        } else {
            valueToSend = value;
        }
        if (onContinue) onContinue(valueToSend, id);
    };

    const getField = () => {
        switch (type) {
            case 'date':
                return (
                    <DateField
                        label={label}
                        placeholder={placeholder}
                        size="large"
                        date={dateVal?.toISOString()}
                        onChange={setDateVal}
                        onOpen={onOpenDatePicker}
                    />
                );
            case 'screen-option':
                return (
                    options && (
                        <ScreenOptionField
                            label={label}
                            options={options}
                            onSelectOption={setValue}
                            selectedOption={value}
                        />
                    )
                );
            default:
                return (
                    <TextField
                        size="large"
                        label={label}
                        placeholder={placeholder}
                        autoCompleteType={rest.autoCompleteType}
                        keyboardType={rest.keyboardType}
                        textContentType={rest.textContentType}
                        autoCapitalize={rest.autoCapitalize}
                        value={value}
                        onChangeText={setValue}
                        {...rest}
                    />
                );
        }
    };

    return (
        <>
            <Margin marginBottom="extraLoose">{getField()}</Margin>
            <Button
                text={Locales.StringsES.Registration.fields.continueButton}
                primary
                onPress={handleOnContinue}
                disabled={error || type === 'date' ? !dateVal : !value}
            />
        </>
    );
};

export default InputField;
