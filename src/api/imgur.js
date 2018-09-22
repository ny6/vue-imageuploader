import qs from 'qs';

const { VUE_APP_CLIENT_ID: clientId } = process.env;
const apiUrl = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: clientId,
      response_type: 'token',
    };
    window.location = `${apiUrl}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
};
