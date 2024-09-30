import { FBIcon, FireIcon, GoogleIcon, LinkedinIcon } from ".";
import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
export const FirstIconTable: React.FC<{}> = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <table className="text-left b5 w-full">
      <thead>
        <tr>
          <th>Channel</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>CTR</th>
          <th>CPA</th>
          <th>AI Score</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <GoogleIcon />
          </td>
          <td>1,250,000</td>
          <td>60,000</td>
          <td>4.8%</td>
          <td>$14.50</td>
          <td>78/100</td>
          <td>
            <div className="flex items-center">
              <button
                className="px-[15px] Button rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                Optimize
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const SecondTable: React.FC<{}> = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <table className="text-left font-b4-500">
      <thead>
        <tr>
          <th>Channel</th>
          <th>Headline</th>
          <th>Target Audience</th>
          <th>Predicted CTR</th>
          <th>Conversion prediction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <LinkedinIcon />
          </td>
          <td>REIT Investment Trusts for Stable Growth</td>
          <td>Professionals aged 30-50 with an interest in real estate.</td>
          <td>6.2%</td>
          <td>
            <div
              className="flex flex-row items-center px-4 gap-x-[8px] Button rounded-[50px] cursor-pointer"
              style={{
                backgroundColor: themeContext?.theme.foreground,
                color: themeContext?.theme.color,
              }}
            >
              <FireIcon />
              Very High
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <FBIcon />
          </td>
          <td>High-Risk, High-Reward Crypto Portfolios</td>
          <td>Males 25-40, engaged with financial blogs and crypto forums.</td>
          <td>5.5%</td>
          <td>
            <div
              className="flex flex-row items-center px-4 gap-x-[8px] Button rounded-[50px] cursor-pointer"
              style={{
                backgroundColor: themeContext?.theme.foreground,
                color: themeContext?.theme.color,
              }}
            >
              <FireIcon />
              Very High
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
