import axios from 'axios';

const requestOptions = {
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/search`,
};

const getSearch = async (token_type, access_token, query) => {
  requestOptions.data = { token_type, access_token, query };
  const response = await axios(requestOptions);

  return response.data;
};

export default getSearch;
