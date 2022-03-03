import { useState, useRef, useEffect } from 'react';
import { Platform, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Screen, DateField } from '../../components';
import { Locales } from '../../utils';
import { RegistrationStyles, spacing } from '../../styles';
import type { ViewProp } from '../../types';
import type { NewUserModel } from '../../api';

import { InputField } from './components';
import { inputFields } from './utils';
import type { InputFieldProps } from './components';

const Registration = ({ navigation }: ViewProp) => {
    const [page, setPage] = useState(0);
    const [user, setUser] = useState<NewUserModel>({
        email: '',
        password: '',
        fullName: '',
        username: '',
        birthdate: '',
    });
    const [selectedDate, setSelectedDate] = useState<string>();
    const [datePickerIsOpen, setDatePickerIsOpen] = useState<boolean>(false);

    const pagerViewRef = useRef<PagerView>(null);

    useEffect(() => {
        pagerViewRef.current?.setPage(page);
    }, [page]);

    const handleOnFieldContinue = (value: string, key: string) => {
        setUser({
            ...user,
            [key]: value,
        });
        setPage(page + 1);
    };

    const toggleDatePicker = () => {
        setDatePickerIsOpen(!datePickerIsOpen);
    };

    const handleOnSelectDate = (date: string) => {
        setSelectedDate(date);
        toggleDatePicker();
    };

    const renderInputField = (inputField: InputFieldProps) => (
        <View key={inputField.id}>
            <InputField
                {...inputField}
                date={selectedDate}
                onContinue={handleOnFieldContinue}
                onOpenDatePicker={toggleDatePicker}
                validation={inputField.validation}
            />
        </View>
    );

    return (
        <>
            <Screen
                title={Locales.StringsES.Registration.title}
                navigation={navigation}
            >
                <PagerView
                    ref={pagerViewRef}
                    pageMargin={spacing()}
                    scrollEnabled={false}
                    initialPage={page}
                    showPageIndicator={false}
                    style={RegistrationStyles.pagerView}
                >
                    {inputFields.map((inputField) =>
                        renderInputField(inputField)
                    )}
                </PagerView>
            </Screen>
            {Platform.OS === 'ios' && (
                <DateField.DatePickeriOS
                    open={datePickerIsOpen}
                    primaryActionText={
                        Locales.StringsES.Registration.dateField
                            .selectDateButton
                    }
                    secondaryActionText={
                        Locales.StringsES.Registration.dateField
                            .cancelDateButton
                    }
                    onCancel={toggleDatePicker}
                    onSelect={handleOnSelectDate}
                />
            )}
        </>
    );
};

export default Registration;
