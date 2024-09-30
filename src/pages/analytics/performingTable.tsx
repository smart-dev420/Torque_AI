import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FBIcon, GoogleIcon } from ".";
export const PerformingTable: React.FC<{}> = () => {
    return (
        <table className="text-left font-b4-500">
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
                    <td>3,200,000</td>
                    <td>460,000</td>
                    <td>28,500</td>
                    <td>5.6%</td>
                    <td>$13.50</td>
                </tr>
                <tr>
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
            
            </tbody>
        </table>
    );
};