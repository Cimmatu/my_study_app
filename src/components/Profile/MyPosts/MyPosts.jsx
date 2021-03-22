import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";


const MyPosts = React.memo(props => {

    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post message={p.post} likes={p.likesCount} key={p.id}/>)

    return (

        <div className={s.postsBlock}>
            My posts

            <MyPostsFormRedux onSubmit={props.onAddPost}/>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>

    )
})

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newPostText'} placeholder={'What is your thoughts?'}
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>
                Send
            </button>
        </div>
    </form>
}

const MyPostsFormRedux = reduxForm({
    form: 'myPostForm'
})(MyPostsForm)

export default MyPosts