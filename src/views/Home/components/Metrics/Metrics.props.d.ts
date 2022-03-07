import type { LineDataProp } from '../../../../types';

export interface MetricItemProps {
    title: string;
    data: LineDataProp[];
    difference: number;
    positiveness: boolean;
}

export interface MetricsProps {
    data?: MetricItemProps[];
}
