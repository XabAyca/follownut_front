import React from 'react'
import { Line } from 'react-chartjs-2'

function GraphWeight () {
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
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: 'Your Weight 2020',
        data: [3, 2, 2, 1, 5, 8, 5, 2, 6, 8, 7],
        borderColor: ['rgba(255, 206, 86, 1)'],
        backgroundColor: ['rgba(255, 206, 86, 1)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 1)',
        pointBorderColor: 'rgba(255, 206, 86, '
      },
      {
        label: 'Your Weight 2019',
        data: [2, 3, 2, 2, 3, 5, 4, 8, 2, 4, 5],
        borderColor: ['rgba(54, 162, 235, 1)'],
        backgroundColor: ['rgba(54, 162, 235, 1)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: 'rgba(54, 162, 235, 1)'
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

export default GraphWeight