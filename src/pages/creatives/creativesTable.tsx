import { FBIcon, LinkedinIcon } from ".";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
export const CreativesTable: React.FC<{}> = () => {
    return (
        <table className="text-left b5 w-full">
            <thead>
                <tr>
                    <th>Format</th>
                    <th>Channels</th>
                    <th>Average Engagement Rate</th>
                    <th>Average Conversion Rate</th>
                    <th>Conversion prediction</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Video Ads</td>
                    <td className="flex flex-row gap-[4px] items-center">
                        <FBIcon />
                        <YouTubeIcon style={{color:'#FF0302'}}/>
                    </td>

                    <td>8.5%</td>
                    <td>4.5%</td>
                    <td>
                        <div className="flex items-center">
                            <button
                                className="px-[15px] Button rounded-[50px] w-[132px] text-left"
                                style={{
                                    backgroundColor: '#41ECCD',
                                    color: '#000',
                                }}
                            >
                                <LocalFireDepartmentIcon style={{color:'#4152EC', fontSize:'14px'}}/>
                                Best
                            </button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>Infographics</td>
                    <td className="flex flex-row gap-[4px] items-center">
                        <LinkedinIcon />
                        <XIcon />
                    </td>

                    <td>6.8%</td>
                    <td>3.2%</td>
                    <td>
                        <div className="flex items-center">
                            <button
                                className="px-[15px] Button rounded-[50px] w-[132px] text-left"
                                style={{
                                    backgroundColor: '#41B9EC',
                                    color: '#000',
                                }}
                            >
                                <LocalFireDepartmentIcon style={{color:'#4152EC', fontSize:'14px'}}/>
                                Second Best
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
