import { useState } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Locales } from '../../../../utils';

import {
    IconButton,
    Text,
    Button,
    Margin,
    Thumbnail,
} from '../../../../components';
import type { ImageFieldProps } from '../../../../types';
import { OnboardingStyles } from '../../../../styles';

const ImageField = ({ title, onContinue }: ImageFieldProps) => {
    const [image, setImage] = useState<string>();
    const pickImage = async () => {
        /* No permissions request is necessary for launching the image library */
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const handleContinue = () => {
        if (onContinue && image) onContinue(image, 'profileImage');
    };
    return (
        <View>
            {title && <Text type="displayLarge">{title}</Text>}
            <View style={OnboardingStyles.imageFieldCameraButtonContainer}>
                <Margin marginTop="extraLoose" marginBottom="regular">
                    {image ? (
                        <Thumbnail source={{ uri: image }} size="huge" />
                    ) : (
                        <IconButton
                            icon="Camera"
                            style={OnboardingStyles.imageFieldCameraButton}
                            onPress={pickImage}
                        />
                    )}
                </Margin>
                {!image && (
                    <Text style={OnboardingStyles.imageFieldCameraButtonLabel}>
                        {Locales.StringsES.Onboarding.fields.image.label}
                    </Text>
                )}
            </View>
            <Margin marginTop="extraLoose">
                <Button
                    text={Locales.StringsES.Onboarding.fields.submitButton}
                    primary
                    onPress={handleContinue}
                    disabled={!image}
                />
            </Margin>
        </View>
    );
};

export default ImageField;
