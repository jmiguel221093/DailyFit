import type { Icons } from '../../components';

type IconActionProp = {
    icon: keyof typeof Icons;
    onPress: () => void;
};

export default IconActionProp;
