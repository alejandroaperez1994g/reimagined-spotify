import axios from 'axios';
import getAccesToken from '../../services/getAccesToken';

const authOptions = {
  method: 'get',
  headers: {
    Authorization: {},
  },
};

export default async function handler(req, res) {
  const { access_token, token_type } = await getAccesToken();
  const { artistID } = req.body;
  authOptions.headers.Authorization = `${token_type} ${access_token}`;
  authOptions.url = `https://api.spotify.com/v1/artists/${artistID}`;
  axios(authOptions).then((response) => {
    res.status(200).json(response.data);
  });
}
