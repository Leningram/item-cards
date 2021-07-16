import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../reducers/commentReducer";

const Comment = (props) => {
    const dispatch = useDispatch();

    function onDeleteComment(commentID) {
        dispatch(deleteComment(commentID));
    }
    return (
        <li className="post-card__comment" key={props.index}>
            {props.comment.text}
            <button>Редактировать</button>
            <button onClick={() => onDeleteComment(props.comment.id)}>Удалить</button>
        </li>
    );
};

export default Comment;
