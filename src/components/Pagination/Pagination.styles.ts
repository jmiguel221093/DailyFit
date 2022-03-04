import { StyleSheet } from 'react-native';
import { spacing, color, scaleSize } from '../../styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        width: scaleSize(20),
        height: scaleSize(2),
        backgroundColor: color('black', '70'),
        marginRight: spacing('extraTight'),
    },
    activeItem: {
        backgroundColor: color('white'),
    },
    lastItem: {
        marginRight: 0,
    },
});
