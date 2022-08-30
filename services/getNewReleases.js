import axios from 'axios';

const requestOptions = {
  method: 'post',
  url: `${process.env.CLIENT_URL}/api/releases`,
};

const getNewReleases = async (token_type, access_token) => {
  requestOptions.data = { token_type: token_type, access_token: access_token };
  const response = await axios(requestOptions);

  return response.data;
};

export default getNewReleases;
