const { google } = require('googleapis');

export const OAuths =  () => {

    const oauth2Client = new google.auth.OAuth2(
       process.env.REACT_APP_CLIENT_ID, // Client ID from Google Cloud Console
       process.env.REACT_APP_CLIENT_SECRET,    // Client Secret from Google Cloud Console  
      'http://localhost:3000'     // Usually http://localhost:3000 for testing
    );
    
    const scopes = ['https://www.googleapis.com/auth/adwords'];
    
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
    });
    
    console.log('Authorize your app by visiting this URL:', url);
    
    // After getting the authorization code from the URL
    const { tokens } = oauth2Client.getToken('YOUR_AUTH_CODE');
    oauth2Client.setCredentials(tokens);
}
