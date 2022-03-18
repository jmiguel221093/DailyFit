import { StyleSheet } from 'react-native';

import { color, radius, scaleSize, spacing, font } from '../../../../styles';

export default StyleSheet.create({
    container: {
        marginRight: spacing('extraLoose'),
    },
    lastItem: {
        marginRight: 0,
    },
    text: {
        opacity: 0.6,
        fontFamily: font('regular'),
    },
    selected: {
        opacity: 1,
        fontFamily: font('medium'),
    },
    indicator: {
        backgroundColor: 'transparent',
        width: scaleSize(20),
        height: scaleSize(3),
        borderRadius: radius('small'),
    },
    indicatorSelected: {
        backgroundColor: color('primary'),
    },
});
