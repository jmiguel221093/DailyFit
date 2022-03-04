import type { ContainerProps } from '../Container';
import type { ViewProp, IconActionProp } from '../../types';

export interface ScreenProps extends ContainerProps, ViewProp {
    children?: React.ReactNode;
    title?: string;
    headerPrimaryAction?: IconActionProp;
    headerSecondaryAction?: IconActionProp;
    headerExtraContent?: JSX.Element;
}
