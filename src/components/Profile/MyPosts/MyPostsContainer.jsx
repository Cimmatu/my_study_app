import React from "react";
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";

class MyPostsAPIComponent extends React.Component {

    onAddPost = (value) => {
        this.props.addPost(value.newPostText)
    }

    render() {
        return (
            <MyPosts
                posts={this.props.posts}
                onAddPost={this.onAddPost}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostText(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}
*/


export default connect(mapStateToProps,
    {addPost})(MyPostsAPIComponent)