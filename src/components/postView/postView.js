import React from "react";
import { useSelector } from "react-redux";

const PostView = () => {
    const currentPost = useSelector((state) => state.currentPost);
    const { title, body, id } = currentPost;
    return (
        <div>
            <div>{title}</div>
            <div>{body}</div>
            <div>{id}</div>
        </div>
    );
};

export default PostView;
