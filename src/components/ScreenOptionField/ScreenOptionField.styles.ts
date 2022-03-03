import { StyleSheet } from 'react-native';

import {
    font,
    scaleSize,
    spacing,
    color,
    radius,
    hexToRGBA,
} from '../../styles';

export default StyleSheet.create({
    label: {
        fontFamily: font('semiBold'),
        marginBottom: spacing('tight'),
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    option: {
        width: scaleSize(146),
        height: scaleSize(146),
        padding: spacing(),
        backgroundColor: color('black', '80'),
        borderRadius: radius('larger'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionLabel: {
        fontFamily: font('medium'),
        color: color('white'),
        opacity: 1,
        marginTop: spacing('baseTight'),
    },
    optionIconContainer: {
        width: scaleSize(60),
        height: scaleSize(60),
        borderRadius: radius('huge'),
        backgroundColor: hexToRGBA(color('white') as string, 0.15),
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionContainerSelected: {
        borderWidth: scaleSize(2),
        borderColor: color('primary'),
    },
    optionIconContainerSelected: {
        backgroundColor: hexToRGBA(color('primary') as string, 0.15),
    },
});
