import { Children, isValidElement, cloneElement } from 'react';

import type { PaddingProps } from './Padding.props';
import getPaddingStyles from './getPaddingStyles';

const Padding = ({
    children,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingEnd,
    paddingStart,
    paddingHorizontal,
    paddingVertical,
    style,
}: PaddingProps) => {
    if (!Children.count(children)) {
        throw new Error('Padding: children is required');
    }
    const childrenWithPadding = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                style: {
                    ...style,
                    /* eslint-disable no-extra-parens */
                    ...(child.props.style || {}),
                    ...getPaddingStyles({
                        padding,
                        paddingBottom,
                        paddingLeft,
                        paddingRight,
                        paddingTop,
                        paddingEnd,
                        paddingStart,
                        paddingHorizontal,
                        paddingVertical,
                    }),
                },
            });
        }
        return child;
    });
    return <>{childrenWithPadding}</>;
};

export default Padding;
