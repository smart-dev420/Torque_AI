
export const CommonTable: React.FC<{}> = () => {
    return (
      <table className="text-left font-b4-500">
        <thead>
          <tr>
            <th>Setting</th>
            <th>Current Status</th>
            <th>Industry Standard</th>
            <th>Top Performer</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[70px]">
            <td>Budget Cap</td>
            <td>$10,000</td>
            <td>$12,000</td>
            <td>$9,500</td>
          </tr>
          <tr className="h-[70px]">
            <td>Audience: Males 25-34</td>
            <td>Conversions 2,000</td>
            <td>Top Audience: M/F 18-24</td>
            <td>Males 25-34</td>
          </tr>
          <tr className="h-[70px]">
            <td>Ad Schedule</td>
            <td>9 AM - 9 PM</td>
            <td>8 AM - 10 PM</td>
            <td>9 AM - 8 PM</td>
          </tr>
        
        </tbody>
      </table>
    );
  };
  