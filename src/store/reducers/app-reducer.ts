import { meAPI } from "../../api/login/me-api"
import {setIsLoggedInAC} from "./login-reducer";
import {AppThunk} from "../store";

const initialState = {
    status: "idle" as RequestStatusType,
    error: null as string | null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_APP_STATUS":
            return {...state, status: action.status}
        case "APP/SET_APP_ERROR":
            return {...state, error: action.error}
        case "APP/SET_APP_IS_INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}
// actions
export const setAppStatusAC = (status: RequestStatusType) =>
    ({type: "APP/SET_APP_STATUS", status} as const)
export const setAppErrorAC = (error: string | null) =>
    ({type: "APP/SET_APP_ERROR", error} as const)
export const setAppIsInitialized = (isInitialized: boolean) =>
    ({type: "APP/SET_APP_IS_INITIALIZED", isInitialized} as const)


// thunks
export const initializeAppTC = (): AppThunk => (dispatch) => {
    meAPI.me()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
        })
        // .catch(error => {
        //     handleNetworkError(error, dispatch)
        // })
        .finally(() => {
            dispatch(setAppIsInitialized(true))
        })
}

// types
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export type InitialStateType = typeof initialState
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type AppActionsType =
    SetAppStatusActionType
    | SetAppErrorActionType
    | ReturnType<typeof setAppIsInitialized>


