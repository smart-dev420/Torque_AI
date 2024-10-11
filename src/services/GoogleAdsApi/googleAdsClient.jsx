import { GoogleAdsApi } from 'google-ads-api';

// Initialize Google Ads API client
const client = new GoogleAdsApi({
  client_id: process.env.REACT_APP_CLIENT_ID, // Replace with your client ID
  client_secret: process.env.REACT_APP_CLIENT_SECRET, // Replace with your client secret
  developer_token: process.env.REACT_APP_DEVELOPERTOKEN, // Replace with your developer token
});

// Define the function to fetch metrics
export async function fetchGoogleAdsData(accessToken) {
  const customerId = process.env.REACT_APP_CUSTOMID; // Replace with your Google Ads customer ID

  try {
    const customer = client.Customer({
      customer_id: customerId,
      refresh_token: accessToken, // Use the access token for authentication
    });

    // Define the query to fetch clicks, conversions, CTR, and CPA
    const query = `
      SELECT 
        metrics.clicks, 
        metrics.conversions, 
        metrics.ctr, 
        metrics.average_cpa
      FROM 
        customer
    `;

    const response = await customer.query(query);

    const data = response.results.map(row => ({
      clicks: row.metrics.clicks,
      conversions: row.metrics.conversions,
      ctr: row.metrics.ctr,
      cpa: row.metrics.average_cpa,
    }));

    console.log(data); // Handle the response as needed
  } catch (error) {
    console.error('Error fetching Google Ads data:', error);
  }
}
