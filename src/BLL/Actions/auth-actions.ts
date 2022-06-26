import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../Services/auth-service";
import { setAuth, setLoading } from "../Reducers/auth";

export const login = createAsyncThunk("LOGIN", async (_: void, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true))
    try {
        await AuthService.login();
        thunkAPI.dispatch(setAuth(true));
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
    finally {
        thunkAPI.dispatch(setLoading(false))
    }
});