import type { ActionProp } from '../../types';

export interface BottomActionsProps {
    /**
     * Content of the component
     */
    content?: React.ReactNode;
    /**
     * Condition to show the component
     */
    open?: boolean;
    /**
     *  Object with required properties to render the primary action button
     */
    primaryAction?: ActionProp;
    /**
     *  Object with required properties to render the secondary action button
     */
    secondaryAction?: ActionProp;
}
