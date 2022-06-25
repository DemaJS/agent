import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isAuth: true,
    isLoading: false
};

const authReducerExtra = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        }
    },
    extraReducers: {},
});

export const authReducer = authReducerExtra.reducer;
export const { setAuth, setLoading } = authReducerExtra.actions;
