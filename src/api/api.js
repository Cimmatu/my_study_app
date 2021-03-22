import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b1035dc0-1052-4891-b216-268cc968feb9"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',


})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    follow(id) {
        return (
            instance
                .post(`follow/${id}`)
                .then(response => response.data)
        )
    },

    unfollow(id) {
        return (
            instance
                .delete(`follow/${id}`)
                .then(response => response.data)
        )
    },

    getProfile(userId) {
        console.warn('Use new ProfileAPI object')
        return ProfileAPI.getProfile(userId)

    },

}


export const ProfileAPI = {
    getProfile(userId) {
        return (
            instance
                .get(`profile/${userId}`)
                .then(response => response.data)
        )
    },

    getStatus(userId){
        return (
            instance
                .get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },

    updateStatus(status){
        return (
            instance
                .put(`profile/status`, {status})
                .then(response => response.data)
        )
    }
}

export const authAPI = {
    me() {
        return (
            instance
                .get(`auth/me`)
                .then(response => response.data)
        )
    },

    login(email, password, rememberMe = false){
        return(
            instance
                .post(`auth/login`, {email, password, rememberMe})
                .then(response => response.data)
        )
    },
    logout(){
        return(
            instance
                .delete(`auth/login`, )
                .then(response => response.data)
        )
    }

}