import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk"
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import miniChatsReducer from "./minichats-reducer";
import appReducer from "./app-reducer";
import chatReducer from "./chat-reducer";
import postsReducer from "./posts-reducer";



let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    profilePage: profileReducer,
    postsPage: postsReducer,
    miniChats: miniChatsReducer,
    chatPage: chatReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store