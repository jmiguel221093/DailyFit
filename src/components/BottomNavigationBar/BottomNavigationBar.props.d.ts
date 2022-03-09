import type { TabActionType } from '@react-navigation/native';

export type BottomNavigationBarRouteItemProps = {
    key: string;
    name: string;
    icon: React.ReactNode;
};

export interface BottomNavigationBarProps {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    navigation?: any;
    tabActions?: {
        jumpTo(name: string, params?: object | undefined): TabActionType;
    };
    routeItems?: BottomNavigationBarRouteItemProps[];
    stateKey?: string;
}
