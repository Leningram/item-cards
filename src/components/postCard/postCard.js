import React from "react";
import "./postCard.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../../reducers/postsReducer";

const PostCard = (props) => {
    const dispatch = useDispatch();

    function onPostDelete(id) {
        dispatch(deletePost(id));
    }

    return (
        <main className="posts--wrapper">
            <div className="post--card">
                <h2 className="post--title">{props.title}</h2>
                <article className="post--content">{props.body}</article>
                <button onClick={() => onPostDelete(props.id)}>delete</button>
            </div>
        </main>
    );
};

export default PostCard;
