const express = require('express');
const { GoogleAdsApi, enums } = require('google-ads-api');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');
// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors({ origin: '*' }));

// Initialize Google Ads API client
const client = new GoogleAdsApi({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    developer_token: process.env.DEVELOPER_TOKEN,
});

app.post('/api/exchange-code', async (req, res) => {
    const { code } = req.body;
    
    try {
        // Exchange the authorization code for access token and refresh token
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code: code,
            client_id: process.env.CLIENT_ID, // Your client ID
            client_secret: process.env.CLIENT_SECRET, // Your client secret
            redirect_uri: 'http://localhost:3000', // Redirect URI used in the login flow
            grant_type: 'authorization_code',
        });
        const { access_token, refresh_token } = tokenResponse.data;
        const customers = await client.listAccessibleCustomers(refresh_token);
        console.log(customers, "))))))))))))))))")
        // Send tokens back to the frontend
        res.json({
            accessToken: access_token,
            refreshToken: refresh_token,
        });
    } catch (error) {
        console.error('Error exchanging authorization code:', error);
        res.status(500).json({ error: 'Failed to exchange authorization code' });
    }
});

// Define a route to fetch Google Ads metrics
app.post('/api/google-ads-data', async (req, res) => {
    const { accessToken } = req.body; // Access token sent from the frontend
    const customerId = process.env.CUSTOMER_ID;
    try {
        const customer = client.Customer({
            customer_id: '2478333258',
            refresh_token: accessToken,
            // login_customer_id: '2463479895',
        });

        // Query to fetch clicks, conversions, CTR, and CPA
        const query = `
            SELECT 
                metrics.clicks, 
                metrics.conversions, 
                metrics.ctr, 
                metrics.average_cpa
            FROM 
                customer
        `;
        const response = await customer.query(query );
        const data = response.results.map(row => ({
            clicks: row.metrics.clicks,
            conversions: row.metrics.conversions,
            ctr: row.metrics.ctr,
            cpa: row.metrics.average_cpa,
        }));

        // Send the data back to the client
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching Google Ads data:', error);
        res.status(500).json({ error: 'Failed to fetch Google Ads data' });
    }
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
