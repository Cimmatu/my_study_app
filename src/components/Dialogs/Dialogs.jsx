import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import * as React from "react";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogPage
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messageElements = state.messages
        .map(m => <Message message={m.message} id={m.id} key={m.id}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={props.addNewMessage}/>
        </div>
    );
}

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your text'}
                       validate={[required, maxLength100]}
                       name={'newMessageBody'} component={Textarea}/>
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs