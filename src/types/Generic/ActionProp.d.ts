import type * as Icons from '../../components/Icon/icons';

type ActionProp = {
    text: string;
    onPress?: () => void;
    type?: 'primary' | 'destructive' | 'default';
    icon?: keyof typeof Icons;
};

export default ActionProp;
