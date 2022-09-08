import axios from 'axios';

const requestOptions = {
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/artistInfo`,
};

const getArtistInfo = async (artistID) => {
  requestOptions.data = {
    artistID: artistID,
  };
  const response = await axios(requestOptions);
  return response.data;
};

export default getArtistInfo;
