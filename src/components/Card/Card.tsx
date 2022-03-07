import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Text } from '../Text';

import Styles from './Card.styles';
import type { CardProps } from './Card.props';

const Card = ({ title, children, style }: CardProps) => {
    const containerStyles: ViewStyle[] = [Styles.container];
    if (style) containerStyles.push(style);

    return (
        <View style={containerStyles}>
            {title && <Text style={Styles.label}>{title}</Text>}
            {children}
        </View>
    );
};

export default Card;
