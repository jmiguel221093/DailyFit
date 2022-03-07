import { ScrollView, View } from 'react-native';
import { VictoryLine } from 'victory-native';
import type { ViewStyle, TextStyle } from 'react-native';

import { Section, Margin, Card, Text } from '../../../../components';
import { Locales } from '../../../../utils';
import { HomeStyles, scaleSize } from '../../../../styles';

import { ChartsStyles } from './utils';
import type { MetricsProps, MetricItemProps } from './Metrics.props';

const Metrics = ({ data }: MetricsProps) => {
    const renderData = (item: MetricItemProps, i: number) => {
        const { title, difference, positiveness } = item;
        let cardStyle: ViewStyle = { ...HomeStyles.metricsCards };
        let differenceStyle: TextStyle = { ...HomeStyles.metricCardDifference };
        let differenceLabelStyle: TextStyle = {
            ...HomeStyles.metricCardDifferenceLabel,
        };
        if (positiveness) {
            differenceStyle = {
                ...differenceStyle,
                ...HomeStyles.metricCardDifferencePositive,
            };
            differenceLabelStyle = {
                ...differenceLabelStyle,
                ...HomeStyles.metricCardDifferencePositive,
            };
        } else {
            differenceStyle = {
                ...differenceStyle,
                ...HomeStyles.metricCardDifferenceNegative,
            };
            differenceLabelStyle = {
                ...differenceLabelStyle,
                ...HomeStyles.metricCardDifferenceNegative,
            };
        }
        if (data && i >= data.length - 1) {
            cardStyle = { ...cardStyle, ...HomeStyles.metricsLastCard };
        }
        if (i === 0) {
            cardStyle = { ...cardStyle, ...HomeStyles.metricsFirstCard };
        }
        return (
            <Card key={`Metric-Item-${i}`} title={title} style={cardStyle}>
                <View style={HomeStyles.metricCardChart}>
                    <VictoryLine
                        data={item.data}
                        width={ChartsStyles.width}
                        height={ChartsStyles.height}
                        padding={ChartsStyles.padding}
                        style={{
                            data: {
                                strokeWidth: ChartsStyles.strokeWidth,
                                stroke: positiveness
                                    ? ChartsStyles.positiveColor
                                    : ChartsStyles.negativeColor,
                            },
                        }}
                    />
                </View>
                <Text style={differenceStyle}>{`${difference}%`}</Text>
                <Text style={differenceLabelStyle}>desde el comienzo</Text>
            </Card>
        );
    };

    return (
        <Margin marginTop="extraLoose" marginHorizontal="regular">
            <Section
                title={Locales.StringsES.Home.sections.metricsSection.title}
                actions={[]}
            >
                <Margin marginHorizontal={-16}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        decelerationRate={0}
                        snapToInterval={scaleSize(164)}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment="start"
                    >
                        {data && data.map((item, i) => renderData(item, i))}
                    </ScrollView>
                </Margin>
            </Section>
        </Margin>
    );
};

export default Metrics;
