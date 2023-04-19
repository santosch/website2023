"use client"

import {memo} from "react";
import ReactApexChart from "react-apexcharts";
import COLORS from "src/styles/colors.module.scss";

const CircleChart = memo(function CircleChart(
    {
        value,
        height,
        centerBackground,
    }: {
        value: number,
        height: number,
        centerBackground: string,
    }
): JSX.Element {
    return (
        <ReactApexChart
            type="radialBar"
            height={height}
            series={[value]}
            options={{
                chart: {
                    height,
                    width: height,
                    type: 'radialBar',
                    sparkline: {
                        enabled: true,
                    },

                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: '80%',
                            background: centerBackground,
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: COLORS.backgroundLight,
                            strokeWidth: '100%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: 0,
                                left: 0,
                                blur: 4,
                                opacity: 0.25
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    },

                },

                fill: {
                    colors: [COLORS.highlight],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        // no gradient for values < 50 since it starts in the middle then
                        gradientToColors: [value < 50 ? COLORS.highlight : COLORS.highlightSecondary],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50]
                    }
                },
            }}
        />
    );
});

export default CircleChart;