import { Screen, TextField, Margin, Button } from '../../components';
import { Locales } from '../../utils';

import type { ViewProp } from '../../types';

const MenuForm = ({ navigation }: ViewProp) => (
    <Screen
        navigation={navigation}
        title={Locales.StringsES.MenuForm.title.edit}
        hasScroll
    >
        <Margin marginBottom="extraLoose">
            <TextField
                size="large"
                placeholder={Locales.StringsES.MenuForm.fields.time.placeholder}
                label={Locales.StringsES.MenuForm.fields.time.label}
                disabled
            />
            <TextField
                placeholder={
                    Locales.StringsES.MenuForm.fields.content.placeholder
                }
                label={Locales.StringsES.MenuForm.fields.content.label}
                multiline
            />
        </Margin>
        <Margin marginBottom="regular">
            <Button text={Locales.StringsES.MenuForm.actions.save} primary />
            <Button text={Locales.StringsES.MenuForm.actions.cancel} clean />
        </Margin>
    </Screen>
);

export default MenuForm;
