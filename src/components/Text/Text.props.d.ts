import type { TextProps as NativeTextProps } from 'react-native';

import type { typographySize } from '../../styles/foundations';

export interface TextProps extends NativeTextProps {
    children?: React.ReactNode;
    type?: keyof typeof typographySize;
}
