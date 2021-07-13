const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const defaultState = localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [];

export default function commentsReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            const newState = [...state, action.payload];
            localStorage.setItem("comments", JSON.stringify(newState));
            return newState;

        case DELETE_COMMENT:
            const index = state.indexOf(state.find((post) => post.id === action.payload));
            const newArr = [...state.slice(0, index), ...state.slice(index + 1)];
            localStorage.setItem("comments", JSON.stringify(newArr));
            return newArr;
        default:
            return state;
    }
}