import type { spacingFoundations } from '../../styles';

export interface MarginStyleProps {
    margin?: keyof typeof spacingFoundations | number;
    marginTop?: keyof typeof spacingFoundations | number;
    marginBottom?: keyof typeof spacingFoundations | number;
    marginLeft?: keyof typeof spacingFoundations | number;
    marginRight?: keyof typeof spacingFoundations | number;
    marginHorizontal?: keyof typeof spacingFoundations | number;
    marginVertical?: keyof typeof spacingFoundations | number;
    marginStart?: keyof typeof spacingFoundations | number;
    marginEnd?: keyof typeof spacingFoundations | number;
    style?: ViewStyle;
}

export interface MarginProps extends MarginStyleProps {
    children: React.ReactNode;
}
