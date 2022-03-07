import { useState } from 'react';
import { View } from 'react-native';
import type { LayoutChangeEvent, ViewStyle } from 'react-native';
import { Svg, Rect, LinearGradient, Defs, Stop } from 'react-native-svg';

import type { BarChartProps } from './BarChart.props';
import { radius, scaleSize, spacing } from '../../styles';

const BarChart = ({ slotColor, data, style, pivot }: BarChartProps) => {
    const GAP = spacing('tight');
    const [height, setHeight] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);

    const containerStyles: ViewStyle[] = [];
    if (style) containerStyles.push(style);

    const handleLayout = (event: LayoutChangeEvent) => {
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
    };

    const slots: JSX.Element[] = [];
    const bars: JSX.Element[] = [];
    const defs: JSX.Element[] = [];
    if (data) {
        const availableWidth = width - (GAP * data.length - 1);
        const dataItemWidth = availableWidth / data.length;
        let chartPivot = 0;
        if (pivot) chartPivot = pivot;
        else chartPivot = Math.max(...data.map((dataItem) => dataItem.size));
        data.forEach((dataItem, i) => {
            let defId = '';
            /* eslint-disable no-extra-parens */
            const barHeight = scaleSize((dataItem.size * 100) / chartPivot);
            if (dataItem.gradientColor) {
                defId = `bar-chart-linear-gradient-${i}`;
                defs.push(
                    <LinearGradient
                        id={defId}
                        key={`BarChart-LinearGradient-Def-${i}`}
                        x1="0.5"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                    >
                        {dataItem.gradientColor.map((gc, j) => (
                            <Stop
                                key={`Bar-Chart-Liner-Gradient-${j}`}
                                offset={
                                    j /
                                    (dataItem.gradientColor
                                        ? dataItem.gradientColor.length - 1
                                        : 1)
                                }
                                stopColor={gc}
                            />
                        ))}
                    </LinearGradient>
                );
            }
            slots.push(
                <Rect
                    key={`BarChart-Slot-${i}`}
                    x={i * dataItemWidth + (i > 0 ? GAP * i : 0)}
                    y={0}
                    width={dataItemWidth}
                    height={height}
                    rx={radius('smallest')}
                    fill={slotColor}
                />
            );
            bars.push(
                <Rect
                    key={`BarChart-Item-${i}`}
                    x={i * dataItemWidth + (i > 0 ? GAP * i : 0)}
                    y={height - barHeight}
                    width={dataItemWidth}
                    /* eslint-disable no-extra-parens */
                    height={barHeight}
                    rx={radius('smallest')}
                    fill={
                        dataItem.gradientColor
                            ? `url(#${defId})`
                            : dataItem.color
                    }
                />
            );
        });
    }

    return (
        <View onLayout={handleLayout} style={containerStyles}>
            <Svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
            >
                {defs.length > 0 && <Defs>{defs}</Defs>}
                {slots}
                {bars}
            </Svg>
        </View>
    );
};

export default BarChart;
