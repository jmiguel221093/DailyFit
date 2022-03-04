import { StyleSheet } from 'react-native';
import { spacing } from '../../styles';

export default StyleSheet.create({
    layout: {
        paddingHorizontal: spacing('extraLoose'),
    },
    fixed: {
        position: 'absolute',
        top: spacing('extraLoose'),
        left: 0,
        right: 0,
    },
});
