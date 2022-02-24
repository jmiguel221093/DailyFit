import { Text as NativeText } from 'react-native';

import Styles from './Text.styles';
import type { TextProps } from './Text.props';

const Text = ({
    children,
    type = 'body',
    style,
    align = 'left',
    ...rest
}: TextProps) => (
    <NativeText
        style={[Styles(type).default, { textAlign: align }, style]}
        {...rest}
    >
        {children}
    </NativeText>
);

export default Text;
