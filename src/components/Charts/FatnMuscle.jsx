import React from 'react'
import { Line } from 'react-chartjs-2'

function fatNMuscleChart () {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: "Masse musculaire (%)",
        data: [35, 34, 35, 36, 37, 38, 39, 39, 40, 41, 42, 43],
        borderColor: ['rgba(39, 207, 61)'],
        backgroundColor: ['rgba(28, 145, 43, 1)'],
        pointBackgroundColor: 'rgba(28, 145, 43, 1)',
        pointBorderColor: 'rgba(114, 252, 132, '
      },
      {
        label: "Masse graisseuse (%)",
        data: [26, 24, 22, 21, 21, 20, 20, 19, 18, 19, 18, 18],
        borderColor: ['rgba(255, 194, 51, 1)'],
        backgroundColor: ['rgba(250, 152, 55, 1)'],
        pointBackgroundColor: 'rgba(250, 152, 55, 1)',
        pointBorderColor: 'rgba(39, 207, 61, '
      },
      {
        label: "Graisse viscérale (%)",
        data: [38, 32, 29, 27, 26, 23, 20, 19, 16, 13, 11, 10],
        borderColor: ['rgba(255, 61, 61, 1)'],
        backgroundColor: ['rgba(255, 0, 0, 1)'],
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        pointBorderColor: 'rgba(255, 206, 86, '
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }

  return <Line data={data} options={options} />
}

export default fatNMuscleChart;