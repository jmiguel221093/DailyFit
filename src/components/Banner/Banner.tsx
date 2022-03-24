import { View } from 'react-native';

import { Text } from '../Text';
import { Margin } from '../Margin';
import { Icon } from '../Icon';

import Styles from './Banner.styles';
import type { BannerProps } from './Banner.props';

const Banner = ({ title, description, icon }: BannerProps) => (
    <View style={Styles.container}>
        {icon && (
            <Margin marginBottom="extraLoose">
                <Icon name={icon} size={34} />
            </Margin>
        )}
        {title && (
            <Margin marginBottom="regular">
                <Text type="heading">{title}</Text>
            </Margin>
        )}
        {description && <Text>{description}</Text>}
    </View>
);

export default Banner;
