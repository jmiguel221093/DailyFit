import { StyleSheet } from 'react-native';

import { font, scaleSize, spacing, color } from '../utils';

export default StyleSheet.create({
    screenContainer: {
        paddingHorizontal: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBackButton: {
        marginRight: spacing('regular'),
    },
    screenTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    screenTitle: {
        fontFamily: font('semiBold'),
        opacity: 1,
    },
    imageFieldCameraButton: {
        width: scaleSize(140),
        height: scaleSize(140),
        borderRadius: scaleSize(52),
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: color('white'),
        borderStyle: 'dashed',
    },
    imageFieldCameraButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageFieldCameraButtonLabel: {
        fontFamily: font('semiBold'),
        opacity: 1,
    },
});
