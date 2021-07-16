import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../reducers/commentReducer";

const Comment = (props) => {
    const [isEdited, setIsEdited] = useState(false);
    const [text, setText] = useState(props.comment.text);
    const dispatch = useDispatch();

    function onEditComment(commentID, commentText) {
        dispatch(editComment(commentID, commentText));
        setIsEdited(false);
    }

    function onDeleteComment(commentID) {
        dispatch(deleteComment(commentID));
    }
    return (
        <li className="post-card__comment">
            {isEdited ? <textarea type="text" value={text} onChange={(e) => setText(e.target.value)} /> : <p>{text}</p>}
            {isEdited ? (
                <button onClick={() => onEditComment(props.comment.id, text)}>Сохранить</button>
            ) : (
                <button onClick={() => setIsEdited(true)}>Редактировать</button>
            )}
            <button onClick={() => onDeleteComment(props.comment.id)}>Удалить</button>
        </li>
    );
};

export default Comment;
