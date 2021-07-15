import React, { useState } from "react";
import "./postCard.css";
import { useDispatch } from "react-redux";
import { editPost } from "../../reducers/postsReducer";
import { deletePost } from "../../reducers/postsReducer";

const PostCard = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [commentsStatus, setCommentsStatus] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const id = props.id;
    const commentsArray = props.comments;
    const dispatch = useDispatch();

    function showComments(e, id) {
        if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
            setCommentsStatus(true);
        }
    }

    function onEditPost(title, body, id, commentsArray) {
        dispatch(editPost(title, body, id, commentsArray));
    }

    function onPostDelete(id) {
        dispatch(deletePost(id));
    }
    const comments = props.comments.map((comment, index) => {
        return <li key={index}>{comment}</li>;
    });

    return (
        <main className="posts--wrapper">
            <div className="post--card" onClick={(e) => showComments(e)}>
                <div className="post--card__content">
                    {isEditable ? (
                        <input
                            type="text"
                            value={title}
                            className="post--card__title"
                            disabled={!isEditable}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    ) : (
                        <h2>{title}</h2>
                    )}
                    {isEditable ? (
                        <input
                            type="text"
                            value={body}
                            className="post--card__body"
                            disabled={!isEditable}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    ) : (
                        <h2>{body}</h2>
                    )}
                </div>
                <div className={commentsStatus ? "comments open" : "comments"}>
                    <form>
                        <input type="text" />
                        <button>Добавить</button>
                    </form>
                    {comments}
                    <button onClick={() => setCommentsStatus(false)}>Скрыть комменты</button>
                </div>
                <button onClick={() => onPostDelete(props.id)}>Delete</button>
                <button
                    onClick={() => {
                        if (!isEditable) {
                            // если редактирование выключено, включаем его
                            setIsEditable(true);
                        } else {
                            //если редактирование включено, передаем данные в редюсер
                            onEditPost(title, body, commentsArray, id);
                            setIsEditable(false); //  и выключаем редактирование
                        }
                    }}
                >
                    {/* Имя кнопки в зависимости от статуса редактирования */}
                    {isEditable ? "Save" : "Edit"}
                </button>
            </div>
        </main>
    );
};

export default PostCard;
