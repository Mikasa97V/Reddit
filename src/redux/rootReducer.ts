import {combineReducers} from "redux";
import {userDataReducer, TUserData} from "./userData/userDataReducer";
import {commentReducer, TComment} from "./commentData/commentReducer";
import {postDataReducer, TPostData} from "./postData/postDataReducer";

export type TRootState = {
    userData: TUserData,
    postData: TPostData,
    comment: TComment,
}

export type TRequest = {
    loading?: boolean,
    error?: string,
    after?: string,
}

export const rootReducer = combineReducers({
    userData: userDataReducer,
    postData: postDataReducer,
    comment: commentReducer,
})
