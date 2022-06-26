import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { extraReducer } from "../../Utils/extra-reducer";
import { deleteOrganization, getOrganization, patchOrganization } from "../Actions/organization-actions";
import { IOrganization, PhotosType, ResponseType } from "../Types/organization-type";

export const initialState: IOrganization = {
    organization: {
        loading: false,
        data: {} as ResponseType,
        error: null
    },
    contacts: {}

};

const organizationReducerExtra = createSlice({
    name: "organization",
    initialState,
    reducers: {
        deleteImage(state, action) {
            const photos = state.organization.data.photos.filter(el => el.name !== action.payload)
            state.organization.data = { ...state.organization.data, photos }
        },
        uploadPhoto(state, action: PayloadAction<PhotosType>) {
            state.organization.data.photos.push(action.payload)
        }
    },
    extraReducers: {
        ...extraReducer(getOrganization, "organization", {}),
        ...extraReducer(patchOrganization, "organization", {}),
        ...extraReducer(deleteOrganization, "organization", {})

    },
});

export const organizationReducer = organizationReducerExtra.reducer;
export const { deleteImage, uploadPhoto } = organizationReducerExtra.actions;

