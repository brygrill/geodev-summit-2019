import axios from 'axios';

// OAuth Flow
const clientID = 'UuWy5HpPYZxS3LCN';
// const redirect = 'http://localhost:3000';
const redirect = 'https://53m9km4lj4.codesandbox.io/';

export const oauthHref = `https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=${clientID}&response_type=token&expiration=20160&redirect_uri=${redirect}`;

// Fetch items
const userItemsBase = 'https://www.arcgis.com/sharing/rest/content/users';
export const fetchUserContent = async (token, username) => {
  const { data } = await axios.get(`${userItemsBase}/${username}`, {
    params: {
      token,
      f: 'json',
    },
  });
  return data;
};
