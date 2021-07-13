const SET_POST = "SET_POST";

const defaultState = { title: "", body: "", id: "", comments: [] };

export default function currentPostReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POST:
            console.log(state);
            return action.payload;

        default:
            return state;
    }
}

export const setPost = (post) => ({
    type: SET_POST,
    payload: post
});
