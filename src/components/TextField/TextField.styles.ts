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
    },
    textField: {
        paddingBottom: spacing('tight'),
        fontFamily: font('regular'),
        fontSize: fontSize('body'),
        color: color('white'),
    },
    textFieldLarge: {
        paddingBottom: Platform.OS === 'android' ? spacing('tight') : spacing(),
        fontSize: fontSize('displayMedium'),
        fontFamily: font('medium'),
    },
});
