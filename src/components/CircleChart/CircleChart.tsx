"use client"

import {memo} from "react";
import ReactApexChart from "react-apexcharts";

const CircleChart = memo(function CircleChart(
    {
        value,
        label,
        height,
    }: {
        value: number,
        label: string,
        height: number,
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
                    type: 'radialBar'
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#212121',
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
                            background: '#424242',
                            strokeWidth: '90%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.4
                            }
                        },
                        dataLabels: {
                            name: {
                                show: true,
                                color: '#eee',
                                fontSize: '0.8rem',
                                // fontFamily: '"Roboto Slab", "Times New Roman", Times, serif',
                                // fontFamily: 'Roboto, "Times New Roman", Times, serif',
                                offsetY: 2,
                            },
                            value: {
                                show: false,
                            }
                        }
                    },

                },

                fill: {
                    colors: ['#00bbff'],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#abe5a1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: [label.toUpperCase()],
            }}
        />
    );
});

export default CircleChart;