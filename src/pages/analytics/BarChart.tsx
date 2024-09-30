import { BarChart } from '@mui/x-charts/BarChart';

export interface ChartData {
  data: number[];
  label: string[];
}

export const BarChartComponent: React.FC<{ datalist: ChartData }> = ({ datalist }) => {  // Destructure datalist here
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: datalist.label }]}  // Access datalist.label correctly
      series={[{ data: datalist.data }]}  // Access datalist.data correctly
      sx={{
        '& .MuiBarElement-root': { // Target the bar elements specifically
          border:'1px solid #fff',
          borderRadius: '16px', // Set the desired border radius for each bar
        },
      }}
    />
  );
};
