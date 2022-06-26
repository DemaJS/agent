
import { AxiosResponse } from 'axios';
import $api from './configurate-axios';

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
}