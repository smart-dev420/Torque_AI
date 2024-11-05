export const KeyTable = ({ keyword, limit }: { keyword: any, limit?: number }) => {
    const getColor = (str: string) => {
        if(str === "MEDIUM" )
            return '#ECBC41';
        else if (str === "HIGH")
            return '#EC6041';
        else 
            return '#41B9EC';
    }
    keyword.sort((a:any, b: any) => parseInt(b.SearchVolume) - parseInt(a.SearchVolume));
    // Use slice to limit the number of items shown
    const limitedKeywords = keyword.slice(0, limit || keyword.length); // default to showing all if no limit

    return (
        <table className="text-left font-b4-500 border-spacing-2 md:table-auto block overflow-scroll md:overflow-auto">
            <thead>
                <tr>
                    <th>Keyword</th>
                    <th>Search Volume</th>
                    <th>Competition Level</th>
                    <th>Opportunity Score</th>
                    <th>Suggested Bid</th>
                </tr>
            </thead>
            <tbody >
                {
                    limitedKeywords.map((item: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{item.Keyword}</td>
                                <td>{item.SearchVolume}/month</td>
                                <td style={{ color: getColor(item.CompetitionLevel) }}>{item.CompetitionLevel}</td>
                                <td>{item.OpportunityScore}/100</td>
                                <td>${item.SuggestedBid}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};
