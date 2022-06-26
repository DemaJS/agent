
import axios, { AxiosResponse } from 'axios';

export default class AuthService {
    static async login(): Promise<AxiosResponse> {
        return axios.get(`http://135.181.35.61:2112/auth?user=USERNAME`)
    }
}