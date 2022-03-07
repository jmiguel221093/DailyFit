import { StyleSheet } from 'react-native';

import { color, radius, spacing, font } from '../../styles';

export default StyleSheet.create({
    container: {
        backgroundColor: color('black', '90'),
        padding: spacing(),
        borderRadius: radius('medium'),
    },
    label: {
        fontFamily: font('semiBold'),
        opacity: 1,
        marginBottom: spacing('loose'),
    },
});
