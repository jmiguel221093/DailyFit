import type * as Icons from '../Icon/icons';

export interface BannerProps {
    title: string;
    description: string;
    icon?: keyof typeof Icons;
}
