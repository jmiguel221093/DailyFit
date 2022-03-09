import { Rect, Line, Path } from 'react-native-svg';

const Barbell = () => (
    <>
        <Rect
            width="3.667"
            height="13.2"
            rx="1.833"
            transform="translate(5.4 5.4)"
        />
        <Rect
            width="3.667"
            height="13.2"
            rx="1.833"
            transform="translate(14.933 5.4)"
        />
        <Path
            d="M200,80h2.2a.733.733,0,0,1,.733.733v7.333a.733.733,0,0,1-.733.733H200"
            transform="translate(-181.4 -72.4)"
        />
        <Path
            d="M26.933,88.8h-2.2A.733.733,0,0,1,24,88.067V80.733A.733.733,0,0,1,24.733,80h2.2"
            transform="translate(-21.533 -72.4)"
        />
        <Line x2="5.867" transform="translate(9.067 12)" />
        <Line x2="1.467" transform="translate(21.533 12)" />
        <Line x2="1.467" transform="translate(1 12)" />
    </>
);

export default Barbell;
