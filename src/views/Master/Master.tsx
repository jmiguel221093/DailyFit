import TabNavigator from '../../navigation/TabNavigator';

import { Header } from './components';

const Master = () => (
    <>
        <Header
            userName="Miguel"
            avatar="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
        <TabNavigator />
    </>
);

export default Master;
