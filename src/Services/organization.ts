
import { AxiosResponse } from 'axios';
import $api from './configurate-axios';

export default class OrganizationService {
    static async getOrganization(): Promise<AxiosResponse> {
        return $api.get(`companies/12`)
    }
}