import { Text as NativeText } from 'react-native';

import Styles from './Text.styles';
import type { TextProps } from './Text.props';

const Text = ({ children, type = 'body', ...rest }: TextProps) => (
    <NativeText style={[Styles(type).default]} {...rest}>
        {children}
    </NativeText>
);

export default Text;
