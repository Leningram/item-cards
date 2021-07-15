import { combineReducers, createStore, applyMiddleware } from "redux";
import postsReducer from "./postsReducer";
import commentReducer from "./commentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
