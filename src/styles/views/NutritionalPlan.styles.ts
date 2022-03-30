import { StyleSheet } from 'react-native';
import { scaleSize, font, spacing, color } from '../utils';

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
    newTrainButtton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: color('white'),
        borderStyle: 'dashed',
    },
});
