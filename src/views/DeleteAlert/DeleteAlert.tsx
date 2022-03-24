import { Banner, Screen, Button, Margin } from '../../components';
import { Locales } from '../../utils';
import type { DeleteAlertProps } from '../../types';

const DeleteAlert = ({ navigation }: DeleteAlertProps) => {
    const handleCancelButtonPress = () => {
        if (navigation) navigation.goBack();
    };
    return (
        <Screen>
            <Banner
                title={Locales.StringsES.DeleteAlert.title.replace(
                    '{item}',
                    Locales.StringsES.generic.training
                )}
                description={Locales.StringsES.DeleteAlert.description}
                icon="Trash"
            />
            <Margin marginTop="regular">
                <Button
                    destructive
                    text={Locales.StringsES.DeleteAlert.actions.confirm}
                />
                <Button
                    text={Locales.StringsES.DeleteAlert.actions.cancel}
                    onPress={handleCancelButtonPress}
                />
            </Margin>
        </Screen>
    );
};

export default DeleteAlert;
