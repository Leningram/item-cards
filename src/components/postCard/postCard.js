import React from "react";
import "./postCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../reducers/postsReducer";
import { setPost } from "../../reducers/currentPostReducer";
import { showPost } from "../../reducers/showPostReducer";

const PostCard = (props) => {
    const posts = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    function setCurrentPost(e, id) {
        if (e.target.tagName !== "BUTTON") {
            const currentPost = posts.find((item) => item.id === id);
            dispatch(setPost(currentPost));
            dispatch(showPost(true));
        }
    }

    function onPostDelete(id) {
        dispatch(deletePost(id));
    }

    return (
        <main className="posts--wrapper">
            <div className="post--card" onClick={(e) => setCurrentPost(e, props.id)}>
                <h2 className="post--title">{props.title}</h2>
                <article className="post--content">{props.body}</article>
                <button onClick={() => onPostDelete(props.id)}>delete</button>
            </div>
        </main>
    );
};

export default PostCard;
