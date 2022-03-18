import type { RoutineItemType, DietItemType } from '../../api';
import type { TabsPageItemProps } from '../../components';

export type NutritionalRoutineTabType = {
    id: string;
    routine: RoutineItemType[];
};
export type NutritionalPlanType = TabsPageItemProps & {
    items: nutritionalRoutineTabType[] | DietItemType[];
};
