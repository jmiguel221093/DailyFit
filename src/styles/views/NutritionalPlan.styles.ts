import { StyleSheet } from 'react-native';
import { scaleSize, font, spacing } from '../utils';

export default StyleSheet.create({
    resourceList: {
        paddingBottom: scaleSize(100),
    },
    gymRoutineScrollView: {
        flex: 1,
    },
    scrollViewContentContainer: {
        paddingBottom: scaleSize(100),
    },
    gymExcerciseName: {
        opacity: 1,
        fontFamily: font('medium'),
    },
    gymExcerciseNameNotFirstChild: {
        marginTop: spacing(),
    },
});
