import { useState } from 'react';
import { View } from 'react-native';
import {
    Button,
    HeaderActions,
    HorizontalPicker,
    Margin,
    Padding,
    Text,
} from '../../components';
import type { ScreenProps } from '../../components';
import { Locales } from '../../utils';

const items = Array.from({ length: 300 }, (_, i) => i + 30);

const PickerPage = ({ navigation }: ScreenProps) => {
    const [value, setValue] = useState<number>(20);

    return (
        <View>
            <Margin marginBottom="extraLoose">
                <HeaderActions
                    primaryAction={{
                        icon: 'ChevronLeft',
                        onPress: () => {
                            if (navigation.canGoBack()) {
                                navigation.goBack();
                            }
                        },
                    }}
                />
            </Margin>
            <Padding paddingHorizontal="extraLoose">
                <Margin marginBottom="extraLoose">
                    <View>
                        <Text type="displayLarge">
                            {Locales.StringsES.EditWeight.title}
                        </Text>
                        <Text type="title">
                            {Locales.StringsES.EditWeight.meta.replace(
                                '{weight}',
                                '82'
                            )}
                        </Text>
                    </View>
                </Margin>
            </Padding>
            <HorizontalPicker
                value={value}
                onChange={setValue}
                items={items}
                unit="kg"
            />
            <Margin margin="extraLoose">
                <View>
                    <Margin marginBottom="regular">
                        <Button
                            text={Locales.StringsES.EditWeight.actions.confirm}
                            primary
                        />
                    </Margin>
                    <Button
                        text={Locales.StringsES.EditWeight.actions.cancel}
                    />
                </View>
            </Margin>
        </View>
    );
};

export default PickerPage;
