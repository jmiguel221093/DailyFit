import { useState } from 'react';

import { TabsPage, Margin } from '../../components';
import { Locales } from '../../utils';
import type {
    NutritionalPlanType,
    NutritionalRoutineTabType,
} from '../../types';
import type { DietItemType } from '../../api';

import { Diet, GymRoutine } from './components';

const Tabs: NutritionalPlanType[] = [
    {
        id: Locales.StringsES.NutritionalPlan.tabs.diet.key,
        title: Locales.StringsES.NutritionalPlan.tabs.diet.title,
        items: [
            {
                id: '1',
                time: 'Desayuno',
                description: `Una taza de café
2 Tomas de proteína con canela en polvo y avena`,
            },
            {
                id: '2',
                time: 'Almuerzo',
                description: `Dos hotcakes de avena con mermelada de fresa sin azúcar y una cucharada de nuez`,
            },
            {
                id: '3',
                time: 'Comida',
                description: `Una taza de café
2 Tomas de proteína con canela en polvo y avena`,
            },
            {
                id: '4',
                time: 'Merienda',
                description: `Dos hotcakes de avena con mermelada de fresa sin azúcar y una cucharada de nuez`,
            },
            {
                id: '5',
                time: 'Cena',
                description: `Dos hotcakes de avena con mermelada de fresa sin azúcar y una cucharada de nuez`,
            },
        ],
    },
    {
        id: Locales.StringsES.NutritionalPlan.tabs.routine.key,
        title: Locales.StringsES.NutritionalPlan.tabs.routine.title,
        items: [
            {
                id: '1',
                routine: [
                    {
                        id: '1',
                        title: 'Espalda',
                        exercises: [
                            {
                                name: 'Jalón con polea al frente',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                            {
                                name: 'Pull over',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                            {
                                name: 'Remo con mancuerna',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                            {
                                name: 'Remo con polea alta',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                        ],
                    },
                    {
                        id: '2',
                        title: 'Espalda 2',
                        exercises: [
                            {
                                name: 'Jalón con polea al frente',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                            {
                                name: 'Pull over',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                            {
                                name: 'Remo con mancuerna',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                            {
                                name: 'Remo con polea alta',
                                sets: 4,
                                reps: {
                                    min: 6,
                                    max: 8,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const handlePressResourceItem = (id: string) => {
    console.log('handlePressResourceItem', id);
};

const NutritionPlan = () => {
    const [selectedTab, setSelectedTab] = useState(Tabs[0].id);

    return (
        <>
            <Margin marginTop="extraLoose">
                <TabsPage
                    tabs={Tabs}
                    selectedTab={selectedTab}
                    onSelectTab={setSelectedTab}
                >
                    {/* eslint-disable indent */}
                    {Tabs.map((tab) =>
                        tab.id ===
                        Locales.StringsES.NutritionalPlan.tabs.diet.key ? (
                            <Diet
                                key={tab.id}
                                items={tab.items as DietItemType[]}
                                tabSource={tab.id}
                                onSelectItem={handlePressResourceItem}
                            />
                        ) : (
                            <GymRoutine
                                key={tab.id}
                                tabSource={tab.id}
                                items={tab.items as NutritionalRoutineTabType[]}
                            />
                        )
                    )}
                </TabsPage>
            </Margin>
        </>
    );
};

export default NutritionPlan;
