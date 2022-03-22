import { StyleSheet } from 'react-native';
import type { TextStyle } from 'react-native';

import { fontSize, color, font, scaleSize, scaleFont } from '../../styles';
import type { typographySizeFoundations } from '../../styles/foundations';

const getFontStyle = (
    type: keyof typeof typographySizeFoundations
): TextStyle => {
    const style: TextStyle = {
        fontSize: fontSize(type),
        fontFamily: font(),
        color: color('white'),
        opacity: 0.7,
        lineHeight: scaleFont(25),
    };
    if (type === 'heading') {
        style.opacity = 1;
        style.fontFamily = font('semiBold');
    }
    if (type === 'label') {
        style.fontFamily = font('semiBold');
    }
    if (type === 'displayMedium') {
        style.fontFamily = font('medium');
        style.opacity = 1;
        style.letterSpacing = scaleSize(-2);
        style.lineHeight = scaleFont(40);
    }
    if (type === 'displayLarge') {
        style.fontFamily = font('medium');
        style.opacity = 1;
        style.letterSpacing = scaleSize(-2);
        style.lineHeight = scaleFont(45);
        style.paddingTop = scaleSize(8);
    }
    return style;
};

export default (type: keyof typeof typographySizeFoundations = 'body') =>
    StyleSheet.create({
        default: {
            ...getFontStyle(type),
        },
    });
