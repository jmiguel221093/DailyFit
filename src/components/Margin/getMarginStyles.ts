import type { MarginStyleProps } from './Margin.props';

import { scaleSize, spacing } from '../../styles';
import type { spacingFoundations } from '../../styles';

const getMarginStyles = (args: MarginStyleProps): Partial<MarginStyleProps> => {
    let marginStyles = {};
    const marginKeys: (keyof typeof args)[] = Object.keys(
        args
    ) as (keyof typeof args)[];
    marginKeys.forEach((key) => {
        if (args[key] !== undefined) {
            if (typeof args[key] === 'number') {
                marginStyles = {
                    ...marginStyles,
                    [key]: scaleSize(args[key] as number),
                };
            } else {
                marginStyles = {
                    ...marginStyles,
                    [key]: spacing(
                        args[key] as keyof typeof spacingFoundations
                    ),
                };
            }
        }
    });
    return marginStyles;
};

export default getMarginStyles;
