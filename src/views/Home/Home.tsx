import { Screen } from '../../components';
import { HomeStyles } from '../../styles';

import { Header, Metrics, Weight } from './components';
import type { MetricItemProps } from './components';

const METRICS_DATA: MetricItemProps[] = [
    {
        title: 'Cadera',
        difference: -5,
        positiveness: false,
        data: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 5 },
            { x: 8, y: 10 },
            { x: 9, y: 5 },
            { x: 10, y: 3 },
            { x: 11, y: 1 },
        ],
    },
    {
        title: 'Cintura',
        difference: -15,
        positiveness: true,
        data: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
        ],
    },
    {
        title: 'Espalda',
        difference: -15,
        positiveness: true,
        data: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
        ],
    },
    {
        title: 'Piernas',
        difference: -15,
        positiveness: true,
        data: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
        ],
    },
];

const Home = () => (
    <Screen hasScroll containerStyle={HomeStyles.containerStyles}>
        <Header
            userName="Miguel"
            avatar="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        />
        <Metrics data={METRICS_DATA} />
        <Weight date={new Date()} weight={75.5} />
    </Screen>
);

export default Home;
