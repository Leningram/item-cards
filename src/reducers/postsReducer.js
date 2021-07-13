const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

const defaultState = localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts"))
    : [];

export default function postsReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_POST:
            const newState = [...state, action.payload];
            localStorage.setItem("posts", JSON.stringify(newState));
            return newState;

        case DELETE_POST:
            const index = state.indexOf(state.find((post) => post.id === action.payload));
            const newArr = [...state.slice(0, index), ...state.slice(index + 1)];
            localStorage.setItem("posts", JSON.stringify(newArr));
            return newArr;
        default:
            return state;
    }
}

export const addPost = (title, body) => ({
    type: ADD_POST,
    payload: (function () {
        // функция для геренации случайного id поста
        function generateId() {
            const id = Math.random().toString(36).substr(2, 10);
            return id;
        }

        const newPost = {
            id: generateId(),
            title,
            body
        };
        return newPost;
    })()
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
});
