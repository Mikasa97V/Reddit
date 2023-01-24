import {Reducer} from "redux";
import {IDataChildrenPosts} from "../../utils/interfaces/IDataChildrenPosts";
import {TRequest} from "../rootReducer";
import {ERROR_POSTS_DATA_REQUEST, POSTS_DATA_LOADING, SUCCESS_POSTS_DATA_REQUEST} from "./postDataAction";

export type TPostData = {
    posts?: IDataChildrenPosts[];
    allPosts?: IDataChildrenPosts[];
    request: TRequest;
}

const initialState: TPostData = {
    posts: [],
    allPosts: [],
    request: {
        loading: false,
        error: '',
        after: '',
    }
}

export const postDataReducer: Reducer<TPostData> = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_DATA_LOADING:
            return {
                ...state,
                request: {
                    loading: true,
                }
            }
        case SUCCESS_POSTS_DATA_REQUEST:
            return {
                ...state,
                posts: action.data,
                allPosts: [...state.allPosts || [], ...action.data],
                request: {
                    loading: false,
                    after: action.after,
                }
            }
        case ERROR_POSTS_DATA_REQUEST:
            return {
                ...state,
                request: {
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state;
    }
}
