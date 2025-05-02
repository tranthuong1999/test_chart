import React from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import { ApexOptions } from 'apexcharts';
import "./style.css";

const chartOptions: ApexOptions = {
    chart: {
        id: 'revenue-bar',
        animations: { enabled: false },
    },
    colors: ['#5B7DB1', '#000', '#5B7DB1'],
    xaxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    grid: {
        show: true,
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 0,
            dataLabels: {
                position: 'top',
            }
        }
    },
    fill: {
        type: ['solid', 'pattern', 'solid'],
        pattern: {
            style: ['verticalLines', 'slantedLines', 'verticalLines'],
            width: 6,
            height: 6,
            strokeWidth: 2
        }
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [0, 1],
        style: {
            colors: ['#000'],
            fontWeight: 'bold'
        },
        offsetY: -20,
        formatter: function (val: number, opts: any) {
            return val !== null ? val : '';
        }
    },
    legend: { 
        show: true,
        position: 'top'
    },
    stroke: {
        show: true,
        width: [0, 2, 3],
        colors: ['#5B7DB1', '#000', '#5B7DB1'],
        dashArray: [0, 0, 6],
    },
    annotations: {
        yaxis: [
            {
                y: 0,
                borderColor: 'black',
                borderWidth: 2,
                strokeDashArray: 0
            }
        ],
        points: [
            {
                x: 'Dec',
                y: 428,
                marker: { size: 0 },
                label: {
                    text: '-9%',
                    borderColor: '#000',
                    style: {
                        color: 'black',
                        background: '#fff',
                        fontWeight: 'bold',
                    },
                    offsetY: -20,
                    offsetX: 25,
                }
            }
        ],
    }
};

const chartSeries = [
    {
        name: 'Revenue',
        type: 'column',
        data: [257, 272, 282, 321, 286, 287, 326, 585, 428, null, null, null],
    },
    {
        name: 'Revenue Budgeted',
        type: 'column',
        data: [null, null, null, null, null, null, null, null, null, 389, 394, 402],
    },
    {
        name: 'Revenue PY Avg',
        type: 'line',
        data: Array(12).fill(260)
    }
];

const RevenueChart = () => {
    const handleGenerateChart = async () => {
        const dataUri = await ApexCharts.exec('revenue-bar', 'dataURI');
        if (dataUri) {
            console.log(dataUri.imgURI);
        }
    };

    return (
        <div>
            <button onClick={handleGenerateChart}>Generate Chart</button>
            <div style={{ width: 600, height: 350, position: 'absolute', left: '-9999px', top: 0 }}>
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    height={350}
                    width={600}
                />
            </div>
        </div>
    );
};

export default RevenueChart;
