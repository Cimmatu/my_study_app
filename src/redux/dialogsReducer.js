
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }

        default:
            return state
    }

}


export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer