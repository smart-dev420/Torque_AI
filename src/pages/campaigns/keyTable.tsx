export const KeyTable: React.FC<{}> = () => {
    return (
        <table className="text-left font-b5-500 border-spacing-2 table-auto">
            <thead>
                <tr>
                    <th>Keyword</th>
                    <th>Search Volume</th>
                    <th>Competition Level</th>
                    <th>Opportunity Score</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td>Best REITs for 2024</td>
                    <td>120,000/month</td>
                    <td style={{color:'#ECBC41'}}>Medium</td>
                    <td>88/100</td>
                </tr>
               
                <tr>
                    <td>Crypto Investment Strategies</td>
                    <td>250,000/month</td>
                    <td style={{color:"#EC6041"}}>High</td>
                    <td>80/100</td>
                </tr>
                <tr>
                    <td>Stock Market for Beginners</td>
                    <td>300,000/month</td>
                    <td style={{color:'#41B9EC'}}>Low</td>
                    <td>92/100</td>
                </tr>
            </tbody>
        </table>
    );
};