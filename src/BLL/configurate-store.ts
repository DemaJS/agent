import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./Reducers/auth"
import { organizationReducer } from "./Reducers/organizations"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        organizations: organizationReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
