import { StyleSheet } from 'react-native';
import { scaleSize, color, radius } from '../../styles';

export default StyleSheet.create({
    container: {
        width: scaleSize(36),
        height: scaleSize(36),
        backgroundColor: color('black', '80'),
        borderRadius: radius('smallest'),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
