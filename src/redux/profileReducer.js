import {ProfileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, post: "It's my first post", likesCount: 12},
        {id: 2, post: "Hello there", likesCount: 11},
    ],
    profile: null,
    newPostText: "",
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, post: action.newPostText, likesCount: 0,}],

            }

        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }

}
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))


}

export const getStatus = (userId) => async (dispatch) => {
    let data = await ProfileAPI.getStatus(userId)

    dispatch(setStatus(data))

}

export const updateStatus = (status) => async (dispatch) => {
    let data = await ProfileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}

export default profileReducer