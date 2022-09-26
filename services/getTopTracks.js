import axios from 'axios';

const requestOptions = {
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/topTracks`,
};

const getTopTracks = async (artistID, access_token, token_type) => {
  requestOptions.data = { artistID, token_type, access_token };
  const response = await axios(requestOptions);
  return response.data;
};

export default getTopTracks;