const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const defaultState = localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) : [];

export default function commentReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            const newState = [...state, action.payload];
            localStorage.setItem("comments", JSON.stringify(newState));
            return newState;

        case EDIT_COMMENT:
            return state;

        case DELETE_COMMENT:
            return state;

        default:
            return state;
    }
}

export const addComment = (postID, text) => ({
    type: ADD_COMMENT,
    payload: (function () {
        // функция для геренации случайного id поста
        function generateId() {
            const id = Math.random().toString(36).substr(2, 10);
            return id;
        }

        const newComment = {
            id: generateId(),
            postID,
            text
        };
        return newComment;
    })()
});
