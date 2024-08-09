import React from "react";
import { Chart } from "react-google-charts";


export const data = [
  ["Área OCDE Principal", "Número de semilleros"],
  ["Ciencias Agrícolas", 17],
  ["Ciencias Naturales", 9],
  ["Ingenieria y tecnología", 7],
  ["Ciencias sociales" , 4],
  
];

export const options = {
  title: "Semilleros por Áreas de la OCDE",
};

export default function GraficoPie() {
    return (
      <div style = {{marginLeft: '10%', marginTop: '0', width: '80%'}}>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    )
  }
