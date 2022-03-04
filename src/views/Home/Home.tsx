import { Screen } from '../../components';

import { Header, Metrics } from './components';

const Home = () => (
    <Screen hasScroll>
        <Header
            userName="Miguel"
            avatar="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        />
        <Metrics />
    </Screen>
);

export default Home;
