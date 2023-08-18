import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "User"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["INDIA", 900],
  ["Australia", 850],
  ["new zealand",365],
  ["china",665],
  ["south africa",665],
  ["oman",765],
  ["iceland",765],
  ["greenland",765],

];

export const options = {
    chart: {
      title: "JETTRADE FX Performance",
      subtitle: "Investment, Return, and Profit: May-Oct",
    },
    colors: ["rgb(235, 8, 8)" , "rgb(37, 11, 165)"],
    
  };

export default function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
