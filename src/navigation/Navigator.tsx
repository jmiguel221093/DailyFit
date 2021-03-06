import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    GetStarted,
    Registration,
    Login,
    MenuForm,
    RoutineForm,
    MoreOptions,
    DeleteAlert,
    EditWeight,
    Onboarding,
} from '../views';
import Master from '../views/Master';
import { color } from '../styles';
import { Screens } from '../utils';

import { alertScreenOptions, modalScreenOptions } from './utils';

const Stack = createNativeStackNavigator();

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={Screens.onboarding}
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: color('black'),
                },
            }}
        >
            <Stack.Screen name={Screens.getStarted} component={GetStarted} />
            <Stack.Screen
                name={Screens.registration}
                component={Registration}
            />
            <Stack.Screen name={Screens.login} component={Login} />
            <Stack.Screen name={Screens.master} component={Master} />
            <Stack.Screen
                name={Screens.menuForm}
                component={MenuForm}
                options={modalScreenOptions}
            />
            <Stack.Screen
                name={Screens.routineForm}
                component={RoutineForm}
                options={modalScreenOptions}
            />
            <Stack.Screen
                name={Screens.moreOptions}
                component={MoreOptions}
                options={alertScreenOptions}
            />
            <Stack.Screen
                name={Screens.deleteAlert}
                component={DeleteAlert}
                options={alertScreenOptions}
            />
            <Stack.Screen name={Screens.editWeight} component={EditWeight} />
            <Stack.Screen name={Screens.onboarding} component={Onboarding} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigator;
