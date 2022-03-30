import { StyleSheet } from 'react-native';
import { radius, spacing, color, font, scaleSize } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: spacing('extraLoose'),
        maxHeight: scaleSize(41),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    tab: {
        paddingHorizontal: spacing('loose'),
        paddingVertical: spacing('tight'),
        borderRadius: radius('smaller'),
        backgroundColor: 'transparent',
        opacity: 0.5,
    },
    notLastTab: {
        marginRight: spacing('baseTight'),
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
