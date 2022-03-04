import { StyleSheet } from 'react-native';
import { spacing } from '../../styles';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    actionsBar: {
        paddingTop: spacing('extraLoose'),
        paddingHorizontal: spacing('extraLoose'),
    },
    containerComponent: {
        paddingTop: spacing('extraLoose') * 2 + spacing(),
    },
});
