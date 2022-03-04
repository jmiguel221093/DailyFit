import { StyleSheet } from 'react-native';

import { font } from '../../styles';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontFamily: font('semiBold'),
    },
});
