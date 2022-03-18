import { StyleSheet } from 'react-native';

import { color } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    resourceItem: {
        borderBottomWidth: 1,
        borderBottomColor: color('black', '10'),
    },
    resourceItemLastChild: {
        borderBottomWidth: 0,
    },
});
