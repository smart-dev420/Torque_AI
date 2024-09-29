import React, {
  useContext,
} from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ThemeContext } from "./Theme/context";
export interface ChartData {
  firstData: number[];
  secondData: number[];
  thirdData: number[];
  xLabel: string[];
}
export const LineChartComponent: React.FC<{
  data: ChartData;
}> = ({ data }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <LineChart
      height={300}
      series={[
        {
          data: data.firstData,
          color: "#41ECCD",
        },
        {
          data: data.secondData,
          color: "#ECBC41",
        },
        {
          data: data.thirdData,
          color: "#41B9EC",
        },
      ]}
      xAxis={[
        {
          scaleType: "point",
          data: data.xLabel,
          labelFontSize: 14,
          labelStyle: { fill: "red" },
        },
      ]}
      yAxis={[
        {
          id: "leftAxisId",
          labelFontSize: 14,
        },
        {
          id: "rightAxisId",
          labelFontSize: 14,
        },
      ]}
      sx={{
        color: themeContext?.theme.color,
        "& .MuiChartsAxis-tickLabel": {
          fill: themeContext?.theme.color + " !important",
        },
        "& .MuiChartsGrid-line": {
          stroke: "#27318E !important",
        },
        "& .MuiChartsGrid-root": {
          stroke: "#27318E !important",
        },
        "& .MuiChartsAxis-line": {
          stroke: "#27318E !important",
        },
      }}
      rightAxis="rightAxisId"
      grid={{ vertical: true, horizontal: true }}
    />
  );
};
