import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navReducer from "./navReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "It's my first post", likesCount: 12},
                {id: 2, post: "Hello there", likesCount: 11},
            ],
            newPostText: ""


        },

        dialogPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Vitya"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "ow are u?"},
                {id: 3, message: "Im fine"},
                {id: 4, message: "Im fine"}
            ],
            newMessageBody: ''

        },

        navPage: {

        }

    },

    _callSubscriber() {

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.navPage = navReducer(this._state.navPage, action)

        this._callSubscriber(this._state)

    }
}



export default store

