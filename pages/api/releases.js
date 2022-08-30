import axios from 'axios';

const authOptions = {
  method: 'get',
  url: 'https://api.spotify.com/v1/browse/new-releases?Country=ES&limit=25',
  headers: {
    Authorization: {},
  },
};

export default async function handler(req, res) {
  const { token_type, access_token } = req.body;
  authOptions.headers.Authorization = `${token_type} ${access_token}`;
  axios(authOptions).then((response) => {
    res.status(200).json(response.data);
  });
}
