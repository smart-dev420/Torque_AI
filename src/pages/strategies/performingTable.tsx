import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
export const PerformingTable: React.FC<{}> = () => {
    return (
        <table className="text-left font-b4-500">
            <thead>
                <tr>
                    <th>Strategy</th>
                    <th>Channels</th>
                    <th>CTR</th>
                    <th>Conversion Rate</th>
                    <th>CAC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Educational Webinars for Crypto Investors</td>
                    <td><LinkedInIcon style={{color:'#0A66C2'}}/> <YouTubeIcon style={{color:'#FF0302'}}/> </td>
                    <td>3.8%</td>
                    <td>22%</td>
                    <td>$25</td>
                </tr>

                <tr>
                    <td>Value-Driven Email Campaigns for REIT Investments</td>
                    <td><LinkedInIcon style={{color:'#0A66C2'}}/> <YouTubeIcon style={{color:'#FF0302'}}/> </td>
                    <td>5.2%</td>
                    <td>18%</td>
                    <td>$64</td>
                </tr>

                <tr>
                    <td>Social Proof Campaign for Stock Portfolios</td>
                    <td><LinkedInIcon style={{color:'#0A66C2'}}/> <YouTubeIcon style={{color:'#FF0302'}}/> </td>
                    <td>9.2%</td>
                    <td>12%</td>
                    <td>$13</td>
                </tr>
            </tbody>
        </table>
    );
};