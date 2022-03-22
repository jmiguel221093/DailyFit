import { Pressable } from 'react-native';
import { Screen, Button, Margin } from '../../components';
import type { ViewProp, ActionProp } from '../../types';

const MoreOptions = ({ route, navigation }: ViewProp) => {
    let actions: (ActionProp & { page: string })[] = [];

    if (route && route.params && route.params.actions) {
        actions = route.params.actions;
    }

    const handlePressAction = (page: string) => {
        navigation.replace(page, {
            id: route?.params.id,
        });
    };
    const handlePressDismiss = () => {
        navigation.goBack();
    };

    return (
        <Screen
            containerStyle={{
                justifyContent: 'flex-end',
            }}
        >
            <Pressable
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                }}
                onPress={handlePressDismiss}
            />
            {actions.map((action, i) => (
                <Margin key={`more-actions-item-${i}`} marginTop="regular">
                    <Button
                        text={action.text}
                        onPress={() => handlePressAction(action.page)}
                        destructive={action.type === 'destructive'}
                        icon={action.icon}
                    />
                </Margin>
            ))}
            <Margin marginTop="regular">
                <Button text="Cancelar" clean onPress={handlePressDismiss} />
            </Margin>
        </Screen>
    );
};

export default MoreOptions;
