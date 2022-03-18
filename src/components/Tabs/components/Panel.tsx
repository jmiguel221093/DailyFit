import { View } from 'react-native';

import Styles from './Panel.styles';
import type { PanelProps } from './Panel.props';

const Panel = ({ children, showPanel }: PanelProps) =>
    showPanel ? <View style={Styles.container}>{children}</View> : <></>;

export default Panel;
