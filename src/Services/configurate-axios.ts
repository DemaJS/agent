import axios from 'axios';
export const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTYxOTQ0MzgsImV4cCI6MTY1Njc5OTIzOH0.Wv4JbgXEQ2FCuQyeQUqQu8ew84DXg3Ao_TeBtD2me7c"


export const API_URL = `http://135.181.35.61:2112/`

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': token
    }
})

export default $api;