import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://cdn.wallpapersafari.com/21/85/7CDu5x.jpg" alt=""/>
            <div>{props.message}</div>

            <div>{props.likes} likes</div>

        </div>

    )
}
export default Post