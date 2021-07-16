import React, { useState } from "react";
import "./postCard.css";
import Comment from "../comment/comment";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../reducers/postsReducer";
import { deletePost } from "../../reducers/postsReducer";
import { addComment } from "../../reducers/commentReducer";

const PostCard = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [commentsStatus, setCommentsStatus] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const id = props.id;
    const dispatch = useDispatch();

    //получаем комменты из стейта и фильтруем по postID только те, которые относятся к данному посту
    const getComments = useSelector((state) => state.comments).filter((e) => e.postID === id);
    function showComments(e) {
        if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
            setCommentsStatus(true);
        }
    }

    function onEditPost(title, body, id) {
        dispatch(editPost(title, body, id));
    }

    function onPostDelete(id) {
        dispatch(deletePost(id));
    }

    function onCommentAdd(e, postID, text) {
        e.preventDefault();
        //если коммент не пустой, добавляем его
        if (text !== "") {
            dispatch(addComment(postID, text));
            setCommentText("");
        }
    }

    const comments = getComments.map((comment, index) => {
        return <Comment comment={comment} key={comment.id} index={index} />;
    });

    return (
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
                    <p>{body}</p>
                )}
            </div>

            {/* показ/скрытие комментов */}
            <div className={commentsStatus ? "post--card__comments open" : "post--card__comments"}>
                <form onSubmit={(e) => onCommentAdd(e, id, commentText)}>
                    <input
                        type="text"
                        autoFocus={true}
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button>Добавить</button>
                </form>
                <ul>{comments}</ul>
                <button onClick={() => setCommentsStatus(false)}>Скрыть комменты</button>
            </div>
            <div className="post--card__comments__buttons">
                <button onClick={() => onPostDelete(props.id)}>Удалить</button>
                <button
                    onClick={() => {
                        if (!isEditable) {
                            // если редактирование выключено, включаем его
                            setIsEditable(true);
                        } else {
                            //если редактирование включено, передаем данные в редюсер
                            onEditPost(id, title, body);
                            setIsEditable(false); //  и выключаем редактирование
                        }
                    }}
                >
                    {/* Имя кнопки в зависимости от статуса редактирования */}
                    {isEditable ? "Сохранить" : "Редактировать"}
                </button>
            </div>
        </div>
    );
};

export default PostCard;
