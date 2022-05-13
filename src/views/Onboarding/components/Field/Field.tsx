import { useState } from 'react';
import { View } from 'react-native';

import { Locales } from '../../../../utils';
import { HorizontalPicker, Text, Button, Margin } from '../../../../components';
import type { SizePickerFieldProps } from '../../../../types';

const Field = ({
    title,
    onContinue,
    items,
    name,
    pickerMark,
}: SizePickerFieldProps) => {
    const [value, setValue] = useState<number>(0);

    const handleContinue = () => {
        if (onContinue && name) onContinue(value, name);
    };

    return (
        <View>
            {title && <Text type="displayLarge">{title}</Text>}
            {items && (
                <Margin marginTop={64}>
                    <View>
                        <HorizontalPicker
                            items={items}
                            unit={pickerMark}
                            value={value}
                            onChange={setValue}
                            itemsOnScreen={5}
                        />
                    </View>
                </Margin>
            )}
            <Margin marginTop="extraLoose">
                <Button
                    text={Locales.StringsES.Onboarding.fields.submitButton}
                    primary
                    onPress={handleContinue}
                    disabled={!value}
                />
            </Margin>
        </View>
    );
};

export default Field;
