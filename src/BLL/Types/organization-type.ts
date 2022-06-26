import { AxiosError } from "axios"


export type PhotosType = {
    name: string
    filepath: string
    thumbpath: string
}
export type ResponseType = {
    id: string
    contactId: string
    name: string
    shortName: string
    businessEntity: string
    contract: { no: string, issue_date: string }
    type: Array<string>
    status: string
    photos: Array<PhotosType>
    createdAt: string
    updatedAt: string
}

export interface IOrganization {
    organization: {
        loading: boolean
        data: ResponseType
        error: AxiosError | null
    },
    contacts: {}
}