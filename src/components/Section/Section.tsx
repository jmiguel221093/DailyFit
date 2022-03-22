import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Text } from '../Text';
import { IconButton } from '../IconButton';

import Styles from './Section.styles';
import type { SectionProps } from './Section.props';

const Section = ({
    style,
    title,
    children,
    contentContainerStyle,
    onPressActions,
}: SectionProps) => {
    const containerStyle: ViewStyle[] = [];
    const contentStyle: ViewStyle[] = [];
    if (style) containerStyle.push(style);
    if (contentContainerStyle) contentStyle.push(contentContainerStyle);

    return (
        <View style={containerStyle}>
            {(title || onPressActions) && (
                <View style={Styles.header}>
                    {title && (
                        <Text type="heading" style={Styles.headerTitle}>
                            {title}
                        </Text>
                    )}
                    {onPressActions && (
                        <IconButton
                            icon="MoreVertical"
                            onPress={onPressActions}
                        />
                    )}
                </View>
            )}
            <View style={contentStyle}>{children}</View>
        </View>
    );
};

export default Section;
