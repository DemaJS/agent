import { AxiosResponse } from 'axios';
import $api from './configurate-axios';

export default class ContactsService {
    static async getContacts(): Promise<AxiosResponse> {
        return $api.get(`conacts/16`)
    }
}