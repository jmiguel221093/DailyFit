import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Text } from '../Text';
import { IconButton } from '../IconButton';

import Styles from './Section.styles';
import type { SectionProps } from './Section.props';

const Section = ({
    style,
    title,
    actions,
    children,
    contentContainerStyle,
}: SectionProps) => {
    const containerStyle: ViewStyle[] = [];
    const contentStyle: ViewStyle[] = [];
    if (style) containerStyle.push(style);
    if (contentContainerStyle) contentStyle.push(contentContainerStyle);

    const handlePressMoreActions = () => {
        let i = 0;
        i += 1;
        return i;
    };

    return (
        <View style={containerStyle}>
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
            <View style={contentStyle}>{children}</View>
        </View>
    );
};

export default Section;
