import type { DietItemType } from '../../../../api';

export interface DietProps {
    tabSource: string;
    items: DietItemType[];
    onSelectItem: (id: string) => void;
}
