import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Investment", "Return", "Profit"],
  ["May", 1000, 400, 700],
  ["June", 700, 460, 650],
  ["July", 660, 1120, 300],
  ["Aug", 1030, 540, 350],
  ["Sep", 1030, 540, 850],
  ["Oct", 1000, 740, 1150],
];

export const options = {
  chart: {
    title: "JETTRADE FX Performance",
    subtitle: "Investment, Return, and Profit: May-Oct",
  },
  colors: ["rgb(53, 138, 148)" , "rgb(37, 11, 165)", "#188310"],
  
};

export default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}