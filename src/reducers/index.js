import { combineReducers, createStore, applyMiddleware } from "redux";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentReducer";
// import currentPostReducer from "./currentPostReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import showPostReducer from "./showPostReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
