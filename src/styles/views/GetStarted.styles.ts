import { StyleSheet } from 'react-native';

import { fontSize } from '../utils';

export default StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
    },
    facebookButton: {
        backgroundColor: '#2D88FF',
    },
    googleButtonContainer: {
        backgroundColor: '#FFF',
    },
    googleButtonText: {
        color: '#000',
    },
    caption: {
        opacity: 1,
    },
    signInLink: {
        fontSize: fontSize('caption'),
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    backgroundImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        flexDirection: 'row',
    },
    backgroundImage: {
        resizeMode: 'contain',
        width: '100%',
        height: 540,
    },
});
