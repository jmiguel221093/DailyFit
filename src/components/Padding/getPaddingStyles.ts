import type { PaddingStyleProps } from './Padding.props';

import { scaleSize, spacing } from '../../styles';
import type { spacingFoundations } from '../../styles';

const getPaddingStyles = (
    args: PaddingStyleProps
): Partial<PaddingStyleProps> => {
    let paddingStyles = {};
    const paddingKeys: (keyof typeof args)[] = Object.keys(
        args
    ) as (keyof typeof args)[];
    paddingKeys.forEach((key) => {
        if (args[key] !== undefined) {
            if (typeof args[key] === 'number') {
                paddingStyles = {
                    ...paddingStyles,
                    [key]: scaleSize(args[key] as number),
                };
            } else {
                paddingStyles = {
                    ...paddingStyles,
                    [key]: spacing(
                        args[key] as keyof typeof spacingFoundations
                    ),
                };
            }
        }
    });
    return paddingStyles;
};

export default getPaddingStyles;
