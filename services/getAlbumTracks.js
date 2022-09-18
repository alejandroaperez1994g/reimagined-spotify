import axios from 'axios'

const requestOptions = {
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/tracks`
}

const getAlbumTracks = async (albumID, access_token, token_type) => {
  requestOptions.data = { albumID, token_type, access_token }

  const response = await axios(requestOptions)
  return response.data
}

export default getAlbumTracks
