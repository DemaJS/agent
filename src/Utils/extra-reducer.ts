import { AsyncThunk } from "@reduxjs/toolkit";

type Action<T> = {
    type: string;
    payload: T;
};
/**
 *
 * @param action - createAsyncThunk action
 * @param stateName - имя свойства из initialState
 * @param initialization - дефолтное состояние свойства data
 * @returns возвращает объект. Со свойствами pending, fulfilled, rejected, {type}/clear
 */

export function extraReducer<AT>(
    action: AsyncThunk<any, any, any>,
    stateName: string,
    initialization: any
) {
    const type = action.typePrefix;
    return {
        [action.pending.type]: (state: any) => {
            state[stateName] = {
                loading: true,
                data: initialization,
                error: null,
            };
        },
        [action.fulfilled.type]: (state: any, action: Action<AT>) => {
            state[stateName] = {
                loading: false,
                data: action.payload,
                error: null,
            };
        },
        [action.rejected.type]: (state: any, action: Action<AT>) => {
            state[stateName] = {
                loading: false,
                data: initialization,
                error: action.payload,
            };
        },
        [`${type}/clear`]: (state: any) => {
            state[stateName] = {
                loading: false,
                data: initialization,
                error: null,
            };
        },
    };
}
