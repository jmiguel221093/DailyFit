import { StyleSheet } from 'react-native';
import { radius, scaleSize } from '../../styles';

export default StyleSheet.create({
    default: {
        resizeMode: 'cover',
    },
    medium: {
        width: scaleSize(40),
        height: scaleSize(40),
        borderRadius: radius('smaller'),
    },
    huge: {
        width: scaleSize(140),
        height: scaleSize(140),
        borderRadius: radius('huge'),
    },
});
