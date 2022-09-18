// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const { CLIENT_ID, CLIENT_SECRET } = process.env
const token = `${CLIENT_ID}:${CLIENT_SECRET}`
const encodedToken = Buffer.from(token).toString('base64')

const authOptions = {
  method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  headers: { Authorization: 'Basic ' + encodedToken },
  data: 'grant_type=client_credentials'
}

export default async function handler (req, res) {
  axios(authOptions).then(function (response) {
    res.status(200).json(response.data)
  })
}
