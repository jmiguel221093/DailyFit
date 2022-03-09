import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    useNavigationBuilder,
    TabRouter,
    TabActions,
    createNavigatorFactory,
} from '@react-navigation/native';
import { Screens } from '../utils';
import { Home, NutritionPlan } from '../views';
import { Icon, BottomNavigationBar } from '../components';
import type { Icons, BottomNavigationBarRouteItemProps } from '../components';
import { hexToRGBA, color as colorPicker, scaleSize } from '../styles';

interface ContainerProps {
    children?: React.ReactNode;
    initialRouteName?: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    screenOptions?: any;
}

const TabNavigatorContainer = ({
    initialRouteName,
    children,
    screenOptions,
}: ContainerProps) => {
    const { state, navigation, descriptors, NavigationContent } =
        useNavigationBuilder(TabRouter, {
            children,
            screenOptions,
            initialRouteName,
        });

    const routeItems: BottomNavigationBarRouteItemProps[] = state.routes.map(
        (route) => ({
            key: route.key,
            icon: descriptors[route.key].options.tabBarIcon,
            name: route.name,
        })
    );

    return (
        <NavigationContent>
            <BottomNavigationBar
                navigation={navigation}
                tabActions={TabActions}
                routeItems={routeItems}
                stateKey={state.key}
            />
            {state.routes.map(
                (route, i) =>
                    i === state.index && (
                        <React.Fragment key={route.key}>
                            {descriptors[route.key].render()}
                        </React.Fragment>
                    )
            )}
        </NavigationContent>
    );
};

const createTabNavigator = createNavigatorFactory(TabNavigatorContainer);

const Tab = createTabNavigator();

const styles = StyleSheet.create({
    indicator: {
        backgroundColor: '#fff',
        width: scaleSize(4),
        height: scaleSize(4),
        borderRadius: scaleSize(4),
        position: 'absolute',
        bottom: scaleSize(6),
    },
});

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: () => {
                let iconName: keyof typeof Icons = 'Eye' as keyof typeof Icons;
                if (route.name === Screens.home) {
                    iconName = 'Home';
                }
                if (route.name === Screens.nutritionalPlan) {
                    iconName = 'Barbell';
                }
                return (
                    <>
                        <Icon
                            name={iconName}
                            color={hexToRGBA(
                                colorPicker('white') as string,
                                !navigation.isFocused() ? 0.4 : 1
                            )}
                        />
                        {navigation.isFocused() && (
                            <View style={styles.indicator} />
                        )}
                    </>
                );
            },
        })}
    >
        <Tab.Screen name={Screens.home} component={Home} />
        <Tab.Screen name={Screens.nutritionalPlan} component={NutritionPlan} />
    </Tab.Navigator>
);

export default TabNavigator;
