import { StyleSheet } from 'react-native';

import { font, scaleSize, spacing, color } from '../utils';

export default StyleSheet.create({
    screenContainer: {
        paddingHorizontal: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    screenTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    screenTitle: {
        fontFamily: font('semiBold'),
        opacity: 1,
        marginLeft: spacing('tight'),
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
