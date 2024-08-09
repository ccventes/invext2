import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Agenda conocimiento", "Numero de semilleros"],
  ["Ciencias agrarias", 16 ],
  ["Ambiente y biodiversidad", 9 ],
  ["Habilidad, ciudad y territorio", 4],
  ["Arte y cultura", 2],
  ["Biotecnologia", 2],
  ["C y T de Minerales y Materiales", 2],
  ["Desarrollo organico", 1],
  ["Técnologias de la información y comunicaciones", 1],
];

export const options = {
  chart: {
    title: "Semilleros por agenda de conocimiento",
    subtitle: "Based on most recent and previous census data",
  },
  hAxis: {
    title: "Semilleros por agenda de conocimiento",
    minValue: 0,
  },
  vAxis: {
    title: "Agenda de conocimiento",
  },
  bars: "horizontal",
  axes: {
    y: {
      0: { side: "right" },
    },
  },
};

export function Barras() {
  console.log("ENTRE A BARRAS")
    return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}
