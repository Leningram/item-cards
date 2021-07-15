import React from "react";

const Comment = (props) => {
    return (
        <li className="post-card__comment" key={props.index}>
            {props.comment}{" "}
        </li>
    );
};

export default Comment;
