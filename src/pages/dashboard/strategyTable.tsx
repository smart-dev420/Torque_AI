import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const StrategyTable: React.FC<{}> = () => {
  return (
    <table className="text-left font-b4-500 w-[100%] overflow-scroll md:overflow-auto block md:mb-0 mb-[16px]">
      <thead>
        <tr>
          <th>Strategy</th>
          <th>Insight</th>
          <th>Key Metric</th>
          <th>Your Performance</th>
          <th>Industry Avg</th>
          <th>Top Performer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="flex flex-row">
              {/* <RemoveRedEyeOutlinedIcon sx={{ fontSize: 10 }} /> */}
              <label>Paid Search (PRC)</label>
            </div>
          </td>
          <td>Generating 60% of total conversions with a CPA of $10.</td>
          <td>Conversions</td>
          <td>245.5K</td>
          <td>245.5K</td>
          <td>245.5K</td>
        </tr>
        <tr>
          <td>
            <div className="flex flex-col">
              {/* <LanguageOutlinedIcon sx={{ fontSize: 10 }} /> */}
              <label>Email Marketing:</label>
            </div>
          </td>
          <td>High engagement rate of 45%, contributing 20% to overall conversions.</td>
          <td>Open Rate</td>
          <td>189</td>
          <td>189</td>
          <td>189</td>
        </tr>
        <tr>
          <td>
            <div className="flex flex-col">
              {/* <ShoppingCartOutlinedIcon sx={{ fontSize: 10 }} /> */}
              <label>Social Media (Organic)</label>
            </div>
          </td>
          <td>High engagement rate of 45%, contributing 20% to overall conversions.</td>
          <td>Engagement Rate</td>
          <td>80</td>
          <td>80</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>
  );
};
