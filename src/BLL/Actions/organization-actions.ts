import { createAsyncThunk } from "@reduxjs/toolkit";
import OrganizationService from "../../Services/organization";

export const getOrganization = createAsyncThunk("ORGANIZATIONS", async (_: void, thunkAPI) => {
    try {
        const response = await OrganizationService.getOrganization();
        return response.data
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});