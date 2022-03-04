import { View } from 'react-native';

import { Text } from '../Text';
import { IconButton } from '../IconButton';

import Styles from './Section.styles';
import type { SectionProps } from './Section.props';

const Section = ({ style, title, actions }: SectionProps) => {
    const handlePressMoreActions = () => {};
    return (
        <View style={style}>
            {(title || actions) && (
                <View style={Styles.header}>
                    {title && (
                        <Text type="heading" style={Styles.headerTitle}>
                            {title}
                        </Text>
                    )}
                    {actions && (
                        <IconButton
                            icon="MoreVertical"
                            onPress={handlePressMoreActions}
                        />
                    )}
                </View>
            )}
        </View>
    );
};

export default Section;
