import { Screen, TextField, Margin, Button } from '../../components';
import { Locales } from '../../utils';

import { ExerciseField } from './components';

import type { ViewProp } from '../../types';

const RoutineForm = ({ navigation }: ViewProp) => (
    <Screen
        title={Locales.StringsES.RoutineForm.title.edit}
        navigation={navigation}
        hasScroll
    >
        <Margin marginBottom="extraLoose">
            <TextField
                size="large"
                placeholder={
                    Locales.StringsES.RoutineForm.fields.muscle.placeholder
                }
                label={Locales.StringsES.RoutineForm.fields.muscle.label}
                disabled
            />
            <ExerciseField />
        </Margin>
        <Margin marginBottom="extraLoose" marginTop="extraLoose">
            <Button
                text={Locales.StringsES.RoutineForm.actions.addNewExercise}
                icon="Plus"
                style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    borderStyle: 'dashed',
                }}
            />
        </Margin>
        <Margin marginBottom="regular">
            <Button text={Locales.StringsES.RoutineForm.actions.save} primary />
            <Button
                text={Locales.StringsES.RoutineForm.actions.delete}
                destructive
            />
            <Button text={Locales.StringsES.RoutineForm.actions.cancel} clean />
        </Margin>
    </Screen>
);

export default RoutineForm;
