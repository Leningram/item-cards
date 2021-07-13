const SHOW_POST = "SHOW_POST";

export default function showPostReducer(state = false, action) {
    switch (action.type) {
        case SHOW_POST:
            return action.payload;

        default:
            return state;
    }
}

export const showPost = (value) => ({
    type: SHOW_POST,
    payload: value
});
