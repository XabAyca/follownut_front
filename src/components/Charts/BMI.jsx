import React from 'react'
import { Line } from 'react-chartjs-2'

function bmiChart () {
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
        label: "Indice de Masse Corporelle",
        data: [31, 29, 27, 27, 26, 26, 26, 25, 23, 24, 23],
        borderColor: ['rgba(19, 141, 212, 1)'],
        backgroundColor: ['rgba(11, 3, 252, 1)'],
        pointBackgroundColor: 'rgba(11, 3, 252, 1)',
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

export default bmiChart;