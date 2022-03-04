import { StyleSheet, Platform } from 'react-native';

import { font, spacing, color, fontSize } from '../../styles';

export default StyleSheet.create({
    container: {},
    label: {
        fontFamily: font('semiBold'),
        marginBottom: spacing('tight'),
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: color('black', '60'),
        justifyContent: 'center',
    },
    textField: {
        paddingBottom: spacing('tight'),
        fontFamily: font('regular'),
        fontSize: fontSize('body'),
        color: color('white'),
    },
    textFieldAction: {
        position: 'absolute',
        right: 0,
        transform: [
            {
                translateY: -spacing('tight'),
            },
        ],
    },
    textFieldLarge: {
        paddingBottom: Platform.OS === 'android' ? spacing('tight') : spacing(),
        fontSize: fontSize('displayMedium'),
        fontFamily: font('medium'),
    },
});
