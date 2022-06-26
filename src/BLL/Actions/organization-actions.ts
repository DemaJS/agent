import { createAsyncThunk } from "@reduxjs/toolkit";
import OrganizationService from "../../Services/organization-service";
import { deleteImage } from "../Reducers/organizations";


export const getOrganization = createAsyncThunk("GET_ORGANIZATIONS", async (_: void) => {
    try {
        const response = await OrganizationService.getOrganization();
        return response.data
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});

export const patchOrganization = createAsyncThunk("PATCH_ORGANIZATIONS", async (data: any) => {
    try {
        const response = await OrganizationService.patchOrganization(data);
        return response.data
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});

export const deleteOrganization = createAsyncThunk("DELETE_ORGANIZATIONS", async () => {
    try {
        await OrganizationService.deleteOrganization();
        return {}
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});

export const deleteImg = createAsyncThunk("DELETE_IMG", async (name: string, thunkAPI) => {
    try {
        await OrganizationService.deleteImg(name);
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});
