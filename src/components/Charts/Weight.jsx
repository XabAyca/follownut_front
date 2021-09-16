import React from 'react'
import { Line } from 'react-chartjs-2'

function weightChart () {
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
        label: "Poids (en kilogrammes)",
        data: [96, 91, 87, 87, 84, 83, 84, 82, 79, 80, 78],
        borderColor: ['rgba(255, 206, 86, 1)'],
        backgroundColor: ['rgba(255, 206, 86, 1)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 1)',
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

export default weightChart;