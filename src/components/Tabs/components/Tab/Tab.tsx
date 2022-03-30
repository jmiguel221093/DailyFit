import { Pressable } from 'react-native';

import { Text } from '../../../Text';
import type { TabProps } from './Tab.props';

const Tab = ({
    style,
    tabStyles,
    isSelected,
    isLast,
    onPress,
    id,
    title,
}: TabProps) => (
    <Pressable
        style={{
            ...style,
            /* eslint-disable no-extra-parens */
            ...(!isLast ? tabStyles?.notLastTab : {}),
            ...(isSelected ? tabStyles?.tabActive : {}),
        }}
        onPress={() => {
            if (onPress) onPress(id);
        }}
    >
        <Text style={tabStyles?.tabText}>{title}</Text>
    </Pressable>
);

export default Tab;
