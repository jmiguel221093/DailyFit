import { View } from 'react-native';

import { Locales } from '../../../../utils';

import { IconButton, Text, Button, Margin } from '../../../../components';
import type { ImageFieldProps } from '../../../../types';
import { OnboardingStyles } from '../../../../styles';

const ImageField = ({ title, onContinue }: ImageFieldProps) => {
    const handleContinue = () => {
        if (onContinue) onContinue('', 'profileImage');
    };
    return (
        <View>
            {title && <Text type="displayLarge">{title}</Text>}
            <View style={OnboardingStyles.imageFieldCameraButtonContainer}>
                <Margin marginTop="extraLoose" marginBottom="regular">
                    <IconButton
                        icon="Camera"
                        style={OnboardingStyles.imageFieldCameraButton}
                        onPress={() => {
                            console.log('Camera');
                        }}
                    />
                </Margin>
                <Text style={OnboardingStyles.imageFieldCameraButtonLabel}>
                    {Locales.StringsES.Onboarding.fields.image.label}
                </Text>
            </View>
            <Margin marginTop="extraLoose">
                <Button
                    text={Locales.StringsES.Onboarding.fields.submitButton}
                    primary
                    onPress={handleContinue}
                />
            </Margin>
        </View>
    );
};

export default ImageField;
