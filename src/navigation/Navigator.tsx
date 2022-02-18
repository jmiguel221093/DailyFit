import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetStarted } from '../views';
import { color } from '../styles';
import { catalogs } from '../utils';

const Stack = createNativeStackNavigator();
const { Screens } = catalogs;

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={Screens.getStarted}
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: color('black'),
                },
            }}
        >
            <Stack.Screen name={Screens.getStarted} component={GetStarted} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigator;
