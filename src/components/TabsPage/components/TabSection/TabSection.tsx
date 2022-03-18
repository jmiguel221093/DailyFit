import { View } from 'react-native';

import Styles from './TabSection.styles';
import type { TabSectionProps } from './TabSection.props';

const TabSection = ({ source, children }: TabSectionProps) => (
    <View key={source} style={Styles.container}>
        {children}
    </View>
);

export default TabSection;
