import axios from 'axios';

const authOptions = {
  method: 'get',
  headers: {
    Authorization: {},
  },
};

export default async function handler(req, res) {
  const { token_type, access_token, artistID } = req.body;

  authOptions.headers.Authorization = `${token_type} ${access_token}`;
  authOptions.url = `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=ES&limit=10&offset=5`;
  axios(authOptions).then((response) => {
    res.status(200).json(response.data);
  });
}
