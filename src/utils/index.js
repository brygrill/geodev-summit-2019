const clientID = 'UuWy5HpPYZxS3LCN';
const redirect = 'http://localhost:3000';

export const oauthHref = `https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=${clientID}&response_type=token&expiration=20160&redirect_uri=${redirect}`;
