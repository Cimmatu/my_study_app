import * as React from "react";
import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class DialogsAPIComponent extends React.Component{

    addNewMessage = (value) => {
        this.props.sendMessage(value.newMessageBody)
    }

    render(){
        if (this.props.isAuth === false) return  <Redirect to={'/login'}/>
        return(
            <Dialogs
                dialogPage={this.props.dialogPage}
                addNewMessage={this.addNewMessage}

            />
        )
    }
}



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}


/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBody(body))
        },
        sendMessage: () => {
            dispatch((sendMessage))
        },
    }
}*/



export default compose(connect(mapStateToProps,
    {sendMessage}), withAuthRedirect)(DialogsAPIComponent)

