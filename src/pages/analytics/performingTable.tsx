import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FBIcon, GoogleIcon } from ".";
export const PerformingTable = ({ perform }: { perform: any }) => {
    return (
        <table className="text-left font-b4-500 md:overflow-auto overflow-scroll block md:table">
            <thead>
                <tr>
                    <th>Channel</th>
                    <th>Impressions</th>
                    <th>Clicks</th>
                    <th>Conversions</th>
                    <th>CTR</th>
                    <th>CPA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><GoogleIcon /> </td>
                    <td>{perform.impressions}</td>
                    <td>{perform.clicks}</td>
                    <td>{perform.conversions}</td>
                    <td>{`${(Math.floor(perform?.ctr * 10000 )/100)}%`}</td>
                    <td>${perform.cpa}</td>
                </tr>
                {/* <tr>
                    <td><FBIcon/>  </td>
                    <td>2,500,000</td>
                    <td>140,000</td>
                    <td>9,500</td>
                    <td>5.6%</td>
                    <td>$12.00</td>
                </tr>
                <tr>
                    <td><LinkedInIcon style={{color:'#0A66C2'}}/> </td>
                    <td>2,500,000</td>
                    <td>140,000</td>
                    <td>7,000</td>
                    <td>5.6%</td>
                    <td>$15.00</td>
                </tr>
             */}
            </tbody>
        </table>
    );
};