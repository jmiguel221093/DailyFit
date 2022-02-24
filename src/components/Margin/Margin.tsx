import { Children, isValidElement, cloneElement } from 'react';

import type { MarginProps } from './Margin.props';
import getMarginStyles from './getMarginStyles';

const Margin = ({
    children,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginEnd,
    marginStart,
    marginHorizontal,
    marginVertical,
}: MarginProps) => {
    if (!Children.count(children)) {
        throw new Error('Margin: children is required');
    }
    const childrenWithMargin = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                style: {
                    /* eslint-disable no-extra-parens */
                    ...(child.props.style || {}),
                    ...getMarginStyles({
                        margin,
                        marginBottom,
                        marginLeft,
                        marginRight,
                        marginTop,
                        marginEnd,
                        marginStart,
                        marginHorizontal,
                        marginVertical,
                    }),
                },
            });
        }
        return child;
    });
    return <>{childrenWithMargin}</>;
};

export default Margin;
