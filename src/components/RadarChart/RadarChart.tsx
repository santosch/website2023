"use client"

import {memo, useCallback, useRef} from "react";
import COLORS from "src/styles/colors.module.scss";
import ReactApexChart from "react-apexcharts";

const RadarChart = memo(function RadarChart(
    {
        values,
        height,
        selected,
        onSelect,
    }: {
        values: Record<string, number>,
        height: number,
        selected?: string | null,
        onSelect?: (selected: string | null) => void,
    }
): JSX.Element {

    const getArrayWithSelected = function<T>(def: T, override: T): Array<T> {
        return Object.keys(values).map((key) => {
            return (key === selected) ? override : def;
        });
    }

    const lastSelected = useRef<string | null>(null);

    const handleMousemove = useCallback(
        (e: any) => {
            const hoveredIndex = e.target?.getAttributeNode('rel')?.nodeValue ?? null;
            const hoveredLabel = Object.keys(values)[hoveredIndex] ?? null;
            if (hoveredLabel === lastSelected.current) {
                return;
            }

            lastSelected.current = hoveredLabel;
            onSelect?.(hoveredLabel);
        },
        [values, onSelect]
    );

    return (
        <ReactApexChart
            type="radar"
            height={height}
            series={[{
                name: 'Meow!',
                data: Object.values(values),
            }]}
            options={{
                chart: {
                    height,
                    type: 'radar',
                    toolbar: {
                        show: false,
                    },
                    // sparkline: {
                    //     enabled: true,
                    // },
                    events: {
                        mouseMove: handleMousemove,

                    },
                },
                xaxis: {
                    categories: Object.keys(values),
                    axisBorder: {
                        color: COLORS.backgroundDark,
                        show: false,
                    },
                    labels: {
                        style: {
                            colors: getArrayWithSelected(COLORS.foregroundDark, COLORS.highlight)
                        },
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    min: 0,
                    max: 100,
                    tickAmount: 5,
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColors: COLORS.backgroundDark,
                            connectorColors: getArrayWithSelected(COLORS.backgroundDark, COLORS.highlight),
                            fill: {
                                colors: [COLORS.background, COLORS.backgroundLight]
                            },
                        }
                    },
                },
                markers: {
                    size: 6,
                    colors: [COLORS.highlight],
                    strokeColors: [COLORS.highlight],
                    strokeWidth: 2,
                },
                tooltip: {
                    enabled: false,
                },
                fill: {
                    colors: [COLORS.highlight],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: [COLORS.highlightSecondary],
                        inverseColors: true,
                        opacityFrom: 0.6,
                        opacityTo: 0.6,
                        stops: [0, 100]
                    }
                },
            }}
        />
    );
});

export default RadarChart;