import React from 'react'
import { Line } from 'react-chartjs-2'

function weightChart ({weights, muscle, date}) {
  const data = {
    labels: date.slice(0, 10).reverse(),
    datasets: [
      {
        label: "Masse musculaire (en kg)",
        data: muscle.slice(0, 10).reverse(),
        borderColor: ["rgba(39, 207, 61)"],
        backgroundColor: ["rgba(28, 145, 43, 1)"],
        pointBackgroundColor: "rgba(28, 145, 43, 1)",
        pointBorderColor: "rgba(114, 252, 132, ",
      },
      {
        label: "Poids (en kg)",
        data: weights.slice(0, 10).reverse(),
        borderColor: ["rgba(255, 206, 86, 1)"],
        backgroundColor: ["rgba(255, 206, 86, 1)"],
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        pointBorderColor: "rgba(255, 206, 86, ",
      },
    ],
  };

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