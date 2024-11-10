import { BarChart } from "@mui/x-charts/BarChart";
import { MAX } from "uuid";

export interface ChartData {
  data: number[];
  label: string[];
}

export const BarChartComponent: React.FC<{ dateValue: any[], dateLabel:string[] }> = ({
  dateValue,dateLabel
}) => {
  // Destructure datalist here
  const maxValue = Math.max(...dateValue);
  return (
    // <BarChart
    //   xAxis={[{ scaleType: 'band', data: datalist.label }]}  // Access datalist.label correctly
    //   series={[{ data: datalist.data }]}  // Access datalist.data correctly
    //   sx={{
    //     '& .MuiBarElement-root': { // Target the bar elements specifically
    //       border:'1px solid #fff',
    //       borderRadius: '16px', // Set the desired border radius for each bar
    //     },
    //   }}
    // />
    <div className="flex flex-row justify-evenly items-end gap-x-[10px] md:h-[230px] h-[150px]">
      {
        dateLabel.map((item, index) => (
          <div className="flex flex-col gap-y-2 items-center" key={index}>
            <div
              className="w-[12px]"
              style={{
                height: `${120 * dateValue[index] / maxValue}px`,
                backgroundColor: "#4152EC",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
            ></div>
            <p className="b5">{dateLabel[index]}</p>
          </div>
        ))}
    </div>
  );
};
