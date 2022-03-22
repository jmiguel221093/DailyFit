import type { NavigationProp } from '@react-navigation/native';
import type { NutritionalRoutineTabType } from '../../../../types';

export interface GymRoutineProps {
    tabSource: string;
    items: NutritionalRoutineTabType[];
    navigation: NavigationProp;
}
