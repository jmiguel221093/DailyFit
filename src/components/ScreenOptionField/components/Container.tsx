import { View } from 'react-native';

import Styles from '../ScreenOptionField.styles';
import type { ContainerProps } from '../ScreenOptionField.props';

const Container = ({ children }: ContainerProps) => (
    <View style={Styles.container}>{children}</View>
);

export default Container;
