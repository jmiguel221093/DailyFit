import { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { IconButton, Margin, Screen, Text } from '../../components';
import { RegistrationStyles, spacing, OnboardingStyles } from '../../styles';

import { ImageField, Field } from './components';
import inputFields from './utils';

import type { OnboardingUserModel } from '../../api';

import type { FieldProps } from './types';
import { Locales } from '../../utils';

const weightItems = Array.from(Array(300).keys()).map((item) => item + 30);
const sizeItems = Array.from(Array(300).keys()).map((item) => item + 10);
const heightItems = Array.from(Array(200).keys()).map((item) => item + 100);

const items = {
    weight: weightItems,
    size: sizeItems,
    height: heightItems,
};

const Onboarding = () => {
    const [page, setPage] = useState(0);
    const [userData, setUserData] = useState<OnboardingUserModel>({
        profileImage: '',
        back: 0,
        height: 0,
        weight: 0,
        hips: 0,
        waist: 0,
        leftArm: 0,
        rightArm: 0,
        leftLeg: 0,
        rightLeg: 0,
    });

    const pagerViewRef = useRef<PagerView>(null);

    const hasPrevious = Boolean(page);

    useEffect(() => {
        pagerViewRef.current?.setPage(page);
    }, [page]);

    const goBack = () => {
        if (!hasPrevious) return;
        setPage(page - 1);
    };

    const handleOnFieldContinue = (value: string | number, key: string) => {
        setUserData({
            ...userData,
            [key]: value,
        });
        setPage(page + 1);
    };

    const renderInputField = (inputField: FieldProps) => (
        <View key={inputField.fieldName}>
            {inputField.fieldType === 'image' ? (
                <ImageField
                    title={inputField.title}
                    onContinue={handleOnFieldContinue}
                />
            ) : (
                <Field
                    title={inputField.title}
                    onContinue={handleOnFieldContinue}
                    name={inputField.fieldName}
                    items={
                        items[inputField.fieldName as keyof typeof items] ||
                        items.size
                    }
                />
            )}
        </View>
    );

    return (
        <>
            <Screen>
                <Margin marginBottom="extraLoose">
                    <View style={OnboardingStyles.header}>
                        {page > 0 && (
                            <IconButton
                                icon="ChevronLeft"
                                onPress={goBack}
                                style={OnboardingStyles.headerBackButton}
                            />
                        )}
                        <View style={OnboardingStyles.screenTitleContainer}>
                            <Text
                                type="title"
                                style={OnboardingStyles.screenTitle}
                            >
                                {Locales.StringsES.Onboarding.screenTitle}
                            </Text>
                        </View>
                    </View>
                </Margin>
                <PagerView
                    ref={pagerViewRef}
                    pageMargin={spacing()}
                    scrollEnabled={false}
                    initialPage={page}
                    showPageIndicator={false}
                    style={RegistrationStyles.pagerView}
                >
                    {inputFields.map(renderInputField)}
                </PagerView>
            </Screen>
        </>
    );
};

export default Onboarding;
