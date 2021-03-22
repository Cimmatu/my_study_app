import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/auth/SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }

}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data // 1 data - axios, 2 data - json
        dispatch(setAuthUserData(id, login, email, true))
    }

}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Incorrect email or password"
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer

