import { StyleSheet } from 'react-native';

import { color, font, fontSize, scaleSize } from '../../styles';

export default StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    itemText: {
        fontFamily: font('medium'),
        fontSize: fontSize('title'),
        textAlign: 'center',
        opacity: 0.5,
    },
    selectedItemText: {
        fontSize: fontSize('displayLarge'),
        lineHeight: 50,
        marginBottom: -10,
        opacity: 1,
    },
    indicatorContainer: {
        height: scaleSize(50),
        justifyContent: 'flex-end',
    },
    indicator: {
        width: scaleSize(2),
        height: scaleSize(20),
        backgroundColor: color('white'),
        opacity: 0.5,
    },
    selectedIndicator: {
        height: scaleSize(40),
        opacity: 1,
    },
});
