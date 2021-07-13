import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPost } from "../../reducers/showPostReducer";
import "./postView.css";

const PostView = (props) => {
    const currentPost = useSelector((state) => state.currentPost);
    const dispatch = useDispatch();

    function closePost(e) {
        dispatch(showPost(false));
    }

    const { title, body, id } = currentPost;
    return (
        <div className={props.className}>
            <div>{title}</div>
            <div>{body}</div>
            <div>{id}</div>
            <button onClick={closePost}>Close</button>
        </div>
    );
};

export default PostView;
