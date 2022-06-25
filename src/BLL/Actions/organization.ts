import { createAsyncThunk } from "@reduxjs/toolkit";
import OrganizationService from "../../Services/organization";


export const getOrganization = createAsyncThunk("LOGIN", async () => {
    try {
        const response = await OrganizationService.getOrganization();
        return response
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});