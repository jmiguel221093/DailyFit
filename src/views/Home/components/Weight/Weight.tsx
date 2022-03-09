import moment from 'moment';

import { Card, Section, Margin, Text, BarChart } from '../../../../components';
import { Locales } from '../../../../utils';
import { HomeStyles, color, hexToRGBA } from '../../../../styles';

import type { WeightProps } from './Weight.props';

require('moment/min/locales.js');

let nDate: moment.Moment | null = null;

const Weight = ({ date, weight }: WeightProps) => {
    nDate = moment(date);
    nDate.locale('es-mx');
    const formattedDate: string = nDate.format('MMMM, DD');
    return (
        <Margin
            marginTop="extraLoose"
            marginBottom={104}
            marginHorizontal="regular"
        >
            <Section
                title={Locales.StringsES.Home.sections.weightSection.title}
                actions={[]}
            >
                <Card>
                    {date && (
                        <Text>{`${formattedDate[0].toUpperCase()}${formattedDate.slice(
                            1,
                            formattedDate.length
                        )}`}</Text>
                    )}
                    {weight && (
                        <Text style={HomeStyles.weightCardValue}>
                            {weight} Kg
                        </Text>
                    )}
                    <Margin marginTop="extraLoose">
                        <BarChart
                            data={[
                                {
                                    size: 5,
                                    gradientColor: ['#68EDC6', '#B0F5F3'],
                                },
                                {
                                    size: 2,
                                    gradientColor: ['#68EDC6', '#B0F5F3'],
                                },
                                {
                                    size: 4,
                                    gradientColor: ['#68EDC6', '#B0F5F3'],
                                },
                                {
                                    size: 3,
                                    gradientColor: ['#68EDC6', '#B0F5F3'],
                                },
                                {
                                    size: 1,
                                    gradientColor: ['#68EDC6', '#B0F5F3'],
                                },
                            ]}
                            slotColor={hexToRGBA(color('black') as string, 0.3)}
                            style={HomeStyles.weightChartContainer}
                        />
                    </Margin>
                </Card>
            </Section>
        </Margin>
    );
};

export default Weight;
