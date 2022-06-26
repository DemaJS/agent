import { createAsyncThunk } from "@reduxjs/toolkit";
import ContactsService from "../../Services/contacts";



export const getContacts = createAsyncThunk("CONTACTS", async () => {
    try {
        const response = await ContactsService.getContacts();
        return response
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});