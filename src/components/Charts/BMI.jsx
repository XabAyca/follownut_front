import React from 'react'
import { Line } from 'react-chartjs-2'

function bmiChart ({date,bmi}) {
  const data = {
    labels: date.slice(0, 10).reverse(),
    datasets: [
      {
        label: "Indice de Masse Corporelle",
        data: bmi.slice(0,10).reverse(),
        borderColor: ["rgba(19, 141, 212, 1)"],
        backgroundColor: ["rgba(11, 3, 252, 1)"],
        pointBackgroundColor: "rgba(11, 3, 252, 1)",
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

export default bmiChart;