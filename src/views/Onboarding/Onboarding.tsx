import { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Screen } from '../../components';
import { RegistrationStyles, spacing } from '../../styles';
import type { ViewProp } from '../../types';
import type { OnboardingUserModel } from '../../api';

import { ImageField } from './components';
import inputFields from './utils';
import type { InputFieldProps } from './types';

const Registration = ({ navigation }: ViewProp) => {
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

    useEffect(() => {
        navigation.removeListener('beforeRemove');
        navigation.addListener('beforeRemove', (e: Event) => {
            if (!hasPrevious) return;
            e.preventDefault();
            setPage(page - 1);
        });
    }, [hasPrevious, page]);

    const handleOnFieldContinue = (value: string | number, key: string) => {
        setUserData({
            ...userData,
            [key]: value,
        });
        setPage(page + 1);
    };

    const renderInputField = (inputField: InputFieldProps) => (
        <View key={inputField.fieldName}>
            {inputField.fieldType === 'image' && (
                <ImageField
                    title={inputField.title}
                    onContinue={handleOnFieldContinue}
                />
            )}
        </View>
    );

    return (
        <>
            <Screen>
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

export default Registration;
