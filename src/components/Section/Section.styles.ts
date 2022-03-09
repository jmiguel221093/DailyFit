import { StyleSheet } from 'react-native';

import { font, spacing } from '../../styles';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing(),
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: font('semiBold'),
    },
});
