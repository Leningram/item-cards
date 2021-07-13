import React, { useState } from "react";
import "./postCard.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../../reducers/postsReducer";

const PostCard = (props) => {
    const [commentsStatus, setCommentsStatus] = useState(false);

    const dispatch = useDispatch();

    function showComments(e, id) {
        if (e.target.tagName !== "BUTTON") {
            setCommentsStatus(true);
        }
    }

    function onPostDelete(id) {
        dispatch(deletePost(id));
    }

    return (
        <main className="posts--wrapper">
            <div className="post--card" onClick={(e) => showComments(e)}>
                <h2 className="post--title">{props.title}</h2>
                <article className="post--content">{props.body}</article>
                <div className={commentsStatus ? "comments open" : "comments"}>
                    Comments
                    <button onClick={() => setCommentsStatus(false)}>Убрать комменты</button>
                </div>
                <button onClick={() => onPostDelete(props.id)}>delete</button>
            </div>
        </main>
    );
};

export default PostCard;
