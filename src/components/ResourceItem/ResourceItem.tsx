import { View, Pressable } from 'react-native';

import { Icon } from '../Icon';

import Styles from './ResourceItem.styles';
import type { ResourceItemProps } from './ResourceItem.props';

const ResourceItem = ({
    children,
    onPress,
    id,
    isLastChild,
}: ResourceItemProps) => (
    <Pressable onPress={() => onPress && onPress(id)}>
        <View
            style={[
                Styles.default,
                !isLastChild ? Styles.bordered : Styles.lastChild,
            ]}
        >
            <View style={Styles.body}>{children}</View>
            {onPress && (
                <View style={Styles.button}>
                    <Icon name="ChevronRight" />
                </View>
            )}
        </View>
    </Pressable>
);

export default ResourceItem;
