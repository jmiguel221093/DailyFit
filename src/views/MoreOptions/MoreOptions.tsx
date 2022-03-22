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

    return (
        <Screen
            containerStyle={{
                justifyContent: 'flex-end',
            }}
        >
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
        </Screen>
    );
};

export default MoreOptions;
