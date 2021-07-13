import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../reducers/postsReducer";

const PostAdd = () => {
    const dispatch = useDispatch();

    function onPostAdd(title, body) {
        dispatch(addPost(title, body));
    }

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onPostAdd(title, body);
                setTitle("");
                setBody("");
            }}
        >
            <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <input type="text" value={body} name="body" onChange={(event) => setBody(event.target.value)} />
            <button>Добавить</button>
        </form>
    );
};

export default PostAdd;
