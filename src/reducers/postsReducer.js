const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const defaultState = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [];

export default function postsReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_POST:
            const newState = [...state, action.payload];
            localStorage.setItem("posts", JSON.stringify(newState));
            return newState;

        case EDIT_POST:
            // const postToEdit = state.find((post) => post.id === action.payload.id);
            const changedPosts = state.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });
            localStorage.setItem("posts", JSON.stringify(changedPosts));

            return changedPosts;

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
            body,
            comments: ["test", "test"]
        };
        return newPost;
    })()
});

export const editPost = (title, body, commentsArray, id) => ({
    type: EDIT_POST,
    payload: {
        id,
        title,
        body,
        comments: commentsArray
    }
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
});
