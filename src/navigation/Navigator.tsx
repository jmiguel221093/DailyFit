import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetStarted, Registration, Login } from '../views';
import Master from '../views/Master';
import { color } from '../styles';
import { Screens } from '../utils';

const Stack = createNativeStackNavigator();

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={Screens.master}
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
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigator;
