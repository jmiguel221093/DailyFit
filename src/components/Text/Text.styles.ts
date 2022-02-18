import { StyleSheet } from 'react-native';
import type { TextStyle } from 'react-native';

import { fontSize, color, font, scaleSize } from '../../styles';
import type { typographySize } from '../../styles/foundations';

const getFontStyle = (type: keyof typeof typographySize): TextStyle => {
    const style: TextStyle = {
        fontSize: fontSize(type),
        fontFamily: font(),
        color: color('white'),
        opacity: 0.7,
    };
    if (type === 'displayLarge') {
        style.fontFamily = font('medium');
        style.opacity = 1;
        style.letterSpacing = scaleSize(-2);
    }
    return style;
};

export default (type: keyof typeof typographySize = 'body') =>
    StyleSheet.create({
        default: {
            ...getFontStyle(type),
        },
    });
