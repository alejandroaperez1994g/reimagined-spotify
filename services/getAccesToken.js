import axios from 'axios';

const getAccesToken = async () => {
  const response = await axios(`${process.env.CLIENT_URL}/api/token`);
  return response.data;
};

export default getAccesToken;
