import { StyleSheet } from 'react-native';
import { scaleSize, spacing, font, color, scaleFont } from '../utils';

export default StyleSheet.create({
    containerStyles: {
        paddingHorizontal: 0,
    },
    metricsCards: {
        width: scaleSize(140),
        marginRight: spacing('baseTight') * 2,
    },
    metricsFirstCard: {
        marginLeft: spacing(),
    },
    metricsLastCard: {
        marginRight: spacing(),
    },
    metricCardChart: {
        marginBottom: spacing('loose'),
    },
    metricCardDifference: {
        fontFamily: font('bold'),
        opacity: 1,
    },
    metricCardDifferencePositive: {
        color: color('primary'),
    },
    metricCardDifferenceNegative: {
        color: color('danger'),
    },
    metricCardDifferenceLabel: {
        fontSize: scaleFont(10.4),
        marginTop: -spacing('tight'),
        fontFamily: font('medium'),
    },
    weightCardValue: {
        fontFamily: font('medium'),
        fontSize: scaleFont(22),
        opacity: 1,
        color: color('black', '10'),
    },
    weightChartContainer: {
        height: scaleSize(100),
    },
});
