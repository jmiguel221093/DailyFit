import { StyleSheet } from 'react-native';
import { radius, spacing, color, font } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: spacing('extraLoose'),
    },
    tab: {
        paddingHorizontal: spacing('loose'),
        paddingVertical: spacing('tight'),
        borderRadius: radius('smaller'),
        backgroundColor: 'transparent',
        opacity: 0.5,
    },
    notLastTab: {
        marginRight: spacing(),
    },
    tabActive: {
        opacity: 1,
        backgroundColor: color('black', '80'),
    },
    tabText: {
        fontFamily: font('semiBold'),
        opacity: 1,
    },
});
