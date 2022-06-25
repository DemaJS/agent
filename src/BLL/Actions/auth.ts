import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../Services/auth";
import { setAuth } from "../Reducers/auth";

export const login = createAsyncThunk("LOGIN", async (_: void, thunkAPI) => {
    try {
        await AuthService.login();
        thunkAPI.dispatch(setAuth(true));
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
});