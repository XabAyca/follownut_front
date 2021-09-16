import React from 'react'
import { Line } from 'react-chartjs-2'

function fatNMuscleChart ({date,visceral,muscle,bodyFat}) {
  const data = {
    labels: date.slice(0, 10).reverse(),
    datasets: [
      {
        label: "Masse musculaire (%)",
        data: muscle.slice(0, 10).reverse(),
        borderColor: ["rgba(39, 207, 61)"],
        backgroundColor: ["rgba(28, 145, 43, 1)"],
        pointBackgroundColor: "rgba(28, 145, 43, 1)",
        pointBorderColor: "rgba(114, 252, 132, ",
      },
      {
        label: "Masse graisseuse (%)",
        data: bodyFat.slice(0, 10).reverse(),
        borderColor: ["rgba(255, 194, 51, 1)"],
        backgroundColor: ["rgba(250, 152, 55, 1)"],
        pointBackgroundColor: "rgba(250, 152, 55, 1)",
        pointBorderColor: "rgba(39, 207, 61, ",
      },
      {
        label: "Graisse viscérale (%)",
        data: visceral.slice(0, 10).reverse(),
        borderColor: ["rgba(255, 61, 61, 1)"],
        backgroundColor: ["rgba(255, 0, 0, 1)"],
        pointBackgroundColor: "rgba(255, 0, 0, 1)",
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

export default fatNMuscleChart;