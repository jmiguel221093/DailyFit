import { createElement } from 'react';
import { Svg } from 'react-native-svg';

import * as Icons from './icons';

import { color as colorStyle, scaleSize } from '../../styles';

import type { IconProps } from './Icon.props';

const Icon = ({
    name,
    size = scaleSize(24),
    width,
    height,
    color = colorStyle('white'),
    style,
    strokeWidth = scaleSize(2),
}: IconProps) => (
    <Svg
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || size}
        height={height || size}
        style={style}
        strokeWidth={strokeWidth}
        stroke={color}
    >
        {createElement(Icons[name])}
    </Svg>
);

export default Icon;
