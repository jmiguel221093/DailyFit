import type { NavigationProp } from '@react-navigation/native';

interface ViewProps {
    navigation?: NavigationProp;
    route?: {
        params: T;
    };
}

export default ViewProps;
