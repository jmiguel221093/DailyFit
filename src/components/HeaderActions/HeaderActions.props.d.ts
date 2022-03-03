import type { IconActionProp } from '../../types';

export interface HeaderActionsProps {
    primaryAction?: IconActionProp;
    secondaryAction?: IconActionProp;
    extraContent?: JSX.Element;
    fixed?: boolean;
}
