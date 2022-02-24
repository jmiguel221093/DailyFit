import type { TextProps as NativeTextProps, TextStyle } from 'react-native';

import type { typographySizeFoundations } from '../../styles/foundations';

export interface TextProps extends NativeTextProps {
    children?: React.ReactNode;
    /**
     * Specifies weather the text should be one of the typography sizes.
     */
    type?: keyof typeof typographySizeFoundations;
    align?: 'left' | 'center' | 'right';
    /**
     * Accepts only a TextStyle object. Arrays are not supported.
     */
    style?: TextStyle;
}
