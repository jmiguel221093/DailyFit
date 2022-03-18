import { Fragment, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { TabsPage, Tabs, Section, Text, Margin } from '../../../../components';
import type { TabType } from '../../../../components';
import { NutritionalPlanStyles } from '../../../../styles';

import type { GymRoutineProps } from './GymRoutine.props';
import type { NutritionalRoutineTabType } from '../../../../types';
import { Locales } from '../../../../utils';

const TABS: TabType[] = [
    {
        id: '1',
        title: 'Día 1',
    },
    {
        id: '2',
        title: 'Día 2',
    },
    {
        id: '3',
        title: 'Día 3',
    },
];

const GymRoutine = ({ tabSource, items }: GymRoutineProps) => {
    const [selectedTab, setSelectedTab] = useState(TABS[0].id);

    const renderPanel = (tabContent: NutritionalRoutineTabType) => (
        <Tabs.Panel id={tabContent.id}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={NutritionalPlanStyles.gymRoutineScrollView}
            >
                <View style={NutritionalPlanStyles.scrollViewContentContainer}>
                    <Margin marginBottom="extraLoose">
                        {tabContent.routine.map((r) => (
                            <Section key={r.id} title={r.title}>
                                {r.exercises.map((e, i) => (
                                    <Fragment key={`routine-exercises-${i}`}>
                                        <Text
                                            style={{
                                                ...NutritionalPlanStyles.gymExcerciseName,
                                                /* eslint-disable no-extra-parens */
                                                ...(i > 0
                                                    ? NutritionalPlanStyles.gymExcerciseNameNotFirstChild
                                                    : {}),
                                            }}
                                        >
                                            {e.name}
                                        </Text>
                                        <Text>{`${e.sets} ${
                                            Locales.StringsES.NutritionalPlan
                                                .tabs.routine.exercises.sets
                                                .plural
                                        } | ${e.reps.min}${
                                            e.reps.max ? ` - ${e.reps.max}` : ''
                                        } ${
                                            Locales.StringsES.NutritionalPlan
                                                .tabs.routine.exercises.reps
                                                .plural
                                        }`}</Text>
                                    </Fragment>
                                ))}
                            </Section>
                        ))}
                    </Margin>
                </View>
            </ScrollView>
        </Tabs.Panel>
    );

    return (
        <TabsPage.Section source={tabSource}>
            <Tabs
                tabs={TABS}
                panelsContent={items}
                renderPanel={renderPanel}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
            />
        </TabsPage.Section>
    );
};

export default GymRoutine;
