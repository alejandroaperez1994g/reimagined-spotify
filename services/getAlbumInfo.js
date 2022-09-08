import axios from 'axios';

const requestOptions = {
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/album`,
};

const getAlbumInfo = async (albumID) => {
  requestOptions.data = {
    albumID: albumID,
  };
  const response = await axios(requestOptions);
  return response.data;
};

export default getAlbumInfo;
