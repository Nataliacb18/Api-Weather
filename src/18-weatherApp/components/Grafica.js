import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { translateDias } from "../helpers/translate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Evolución de Temperatura y Humedad",
    },
  },
};

export function Grafica({ weather }) {
  const data = {
    labels: weather.list?.map((elem) => translateDias(elem.dt)),
    datasets: [
      {
        fill: true,
        label: "Humedad",
        data: weather.list?.map((elem) => elem.humidity),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Temperatura",
        data: weather.list?.map((elem) => elem.temp.day - 273.15),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        fill: true,
        label: "Viento",
        data: weather.list?.map((elem) => elem.speed * 3.6),
        borderColor: "rgb(42, 165, 69)",
        backgroundColor: "rgb(42, 165, 69, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
