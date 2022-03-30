import { View } from 'react-native';

import {
    Layout,
    Text,
    TextField,
    IconButton,
    Margin,
} from '../../../../components';

import { Locales } from '../../../../utils';

const ExerciseField = () => {
    const handleDelete = () => {
        console.log('DELETE');
    };

    return (
        <Layout direction="row" align="flex-start">
            <Margin marginRight="regular">
                <IconButton destructive icon="Minus" onPress={handleDelete} />
            </Margin>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Text type="label">
                    {Locales.StringsES.RoutineForm.fields.exercise.label}
                </Text>
                <Margin marginBottom="tight">
                    <TextField
                        inputContainerStyle={{
                            borderBottomColor: 'transparent',
                        }}
                        placeholder={
                            Locales.StringsES.RoutineForm.fields.exercise
                                .placeholder
                        }
                    />
                </Margin>
                <Layout direction="row">
                    <Margin marginRight="regular">
                        <Text>
                            {Locales.StringsES.RoutineForm.fields.sets.label}
                        </Text>
                    </Margin>
                    <TextField
                        inputContainerStyle={{
                            borderBottomColor: 'transparent',
                        }}
                        placeholder={
                            Locales.StringsES.RoutineForm.fields.sets
                                .placeholder
                        }
                    />
                </Layout>
                <Layout direction="row">
                    <Margin marginRight="regular">
                        <Text>
                            {
                                Locales.StringsES.RoutineForm.fields.reps.min
                                    .label
                            }
                        </Text>
                    </Margin>
                    <TextField
                        inputContainerStyle={{
                            borderBottomColor: 'transparent',
                        }}
                        placeholder={
                            Locales.StringsES.RoutineForm.fields.reps.min
                                .placeholder
                        }
                    />
                </Layout>
                <Layout direction="row">
                    <Margin marginRight="regular">
                        <Text>
                            {
                                Locales.StringsES.RoutineForm.fields.reps.max
                                    .label
                            }
                        </Text>
                    </Margin>
                    <TextField
                        inputContainerStyle={{
                            borderBottomColor: 'transparent',
                        }}
                        placeholder={
                            Locales.StringsES.RoutineForm.fields.reps.max
                                .placeholder
                        }
                    />
                </Layout>
            </View>
        </Layout>
    );
};

export default ExerciseField;
