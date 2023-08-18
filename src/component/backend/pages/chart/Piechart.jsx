import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Coin", "Hours per Day"],
  ["Bitcoin", 9],
  ["XRP", 2],
  ["Bitcoin Cash", 4],
  ["Dogecoin", 2],
  ["Ethereum", 7],
];

export const options = {
  title: "Most Profitable Coin",
  is3D: true,
};

export default function Piechart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"350px"}
    />
  );
}
