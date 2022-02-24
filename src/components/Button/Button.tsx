import { useState } from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';

import type { ViewStyle, TextStyle } from 'react-native';

import { Text } from '../Text';
import type { ButtonProps } from './Button.props';
import { ContainerStyles, TextStyles } from './Button.styles';

const Button = ({
    text,
    style,
    primary,
    link,
    textStyle,
    onPress,
}: ButtonProps) => {
    if (!text) throw new Error('Button text is required');

    const [transition] = useState(new Animated.Value(0));

    const containerStyle: ViewStyle[] = [ContainerStyles.default];
    let textStyles: TextStyle = TextStyles.default;
    if (primary) containerStyle.push(ContainerStyles.primary);
    if (style) containerStyle.push(style);
    if (textStyle) textStyles = { ...textStyles, ...textStyle };
    if (link) {
        containerStyle.push(ContainerStyles.link);
        textStyles = { ...textStyles, ...TextStyles.link };
    }

    const showOverlay = (value: number) => {
        Animated.timing(transition, {
            toValue: value,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handlePressIn = () => {
        showOverlay(1);
    };
    const handlePressOut = () => {
        showOverlay(0);
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
        >
            <View style={containerStyle}>
                <Text style={textStyles}>{text}</Text>
                <Animated.View
                    style={[
                        ContainerStyles.overlay,
                        {
                            opacity: transition,
                        },
                    ]}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;
