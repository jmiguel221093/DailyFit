import { StyleSheet } from 'react-native';
import { spacing } from '../../styles';

export default StyleSheet.create({
    tabsContainer: {
        paddingHorizontal: spacing('regular'),
        marginBottom: spacing('extraLoose'),
    },
    pagerView: {
        flexDirection: 'row',
        alignItems: 'stretch',
        flexBasis: '73.9%',
    },
});
