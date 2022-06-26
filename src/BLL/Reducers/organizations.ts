import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { extraReducer } from "../../Utils/extra-reducer";
import { getOrganization } from "../Actions/organization-actions";
import { IOrganization, ResponseType } from "../Types/organization-type";

export const initialState: IOrganization = {
    organization: {
        loading: false,
        data: {} as ResponseType,
        error: null
    }

};

const organizationReducerExtra = createSlice({
    name: "organization",
    initialState,
    reducers: {

    },
    extraReducers: {
        ...extraReducer(getOrganization, "organization", {}),
    },
});

export const organizationReducer = organizationReducerExtra.reducer;

