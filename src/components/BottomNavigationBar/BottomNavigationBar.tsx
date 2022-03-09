import { Pressable, View } from 'react-native';

import Styles from './BottomNavigationBar.styles';
import type {
    BottomNavigationBarProps,
    BottomNavigationBarRouteItemProps,
} from './BottomNavigationBar.props';

const BottomNavigationBar = ({
    tabActions,
    navigation,
    routeItems,
    stateKey,
}: BottomNavigationBarProps) => {
    const handleOnPressItem = (route: BottomNavigationBarRouteItemProps) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: false,
        });

        if (!event.defaultPrevented && tabActions) {
            navigation.dispatch({
                ...tabActions.jumpTo(route.name),
                target: stateKey,
            });
        }
    };
    return (
        <View style={Styles.container}>
            {routeItems &&
                routeItems.map((item) => (
                    <Pressable
                        key={item.key}
                        onPress={() => handleOnPressItem(item)}
                        style={Styles.button}
                    >
                        {item.icon}
                    </Pressable>
                ))}
        </View>
    );
};

export default BottomNavigationBar;
