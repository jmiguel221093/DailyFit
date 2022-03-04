import { StyleSheet } from 'react-native';

import { spacing, radius, color, font } from '../../styles';

export const ContainerStyles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius(),
        backgroundColor: color('black', '90'),
        padding: spacing('regular'),
        overflow: 'hidden',
    },
    primary: {
        backgroundColor: color('primary'),
    },
    link: {
        backgroundColor: 'transparent',
        padding: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    disabled: {
        backgroundColor: color('black', '60'),
    },
});

export const TextStyles = StyleSheet.create({
    default: {
        fontFamily: font('semiBold'),
        opacity: 1,
    },
    link: {
        fontFamily: font('regular'),
        color: color('highlight'),
        textDecorationLine: 'underline',
    },
    disabled: {
        color: color('black', '80'),
    },
});
