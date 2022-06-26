
import axios, { AxiosResponse } from 'axios';
import $api, { API_URL, token } from './configurate-axios';

export default class OrganizationService {
    static async getOrganization(): Promise<AxiosResponse> {
        return $api.get(`companies/12`)
    }
    static async patchOrganization(data: any): Promise<AxiosResponse> {
        return $api.patch(`companies/12`, data)
    }
    static async deleteOrganization(): Promise<AxiosResponse> {
        return $api.delete(`companies/12`)
    }
    static async deleteImg(name: string): Promise<AxiosResponse> {
        return $api.delete(`companies/12/image/${name}`)
    }
    static async uploadImg(formData: any): Promise<AxiosResponse> {
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: token
            },
        }
        return axios.post(`${API_URL}companies/12/image`, formData, config)
    }
}
