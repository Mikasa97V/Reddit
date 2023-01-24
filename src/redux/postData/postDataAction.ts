import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../../Root";
import axios from "axios";

export const POSTS_DATA_LOADING = 'POSTS_DATA_LOADING';
export const SUCCESS_POSTS_DATA_REQUEST = 'SUCCESS_POSTS_DATA_REQUEST';
export const ERROR_POSTS_DATA_REQUEST = 'ERROR_POSTS_DATA_REQUEST';


export type TPostsDataLoading = {
    type: typeof POSTS_DATA_LOADING,
}

export type TSuccessPostsDataRequest = {
    type: typeof SUCCESS_POSTS_DATA_REQUEST,
}

export type TErrorPostsDataRequest = {
    type: typeof ERROR_POSTS_DATA_REQUEST,
}

export const postsDataLoading: ActionCreator<TPostsDataLoading> = () => ({
    type: POSTS_DATA_LOADING,
})

export const successPostsDataRequest: ActionCreator<TSuccessPostsDataRequest> = (data, after) => ({
    type: SUCCESS_POSTS_DATA_REQUEST,
    data,
    after,
})

export const errorPostsDataRequest: ActionCreator<TErrorPostsDataRequest> = (error: string) => ({
    type: ERROR_POSTS_DATA_REQUEST,
    error
})

export const postsDataAsyncRequest = (cursor?: string): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
    dispatch(postsDataLoading());
    try {
        const token = getState().userData.token
        if (!token) throw new Error("Unauthorized error")
        const resp: any = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true',
            {
                headers: {Authorization: `bearer ${token}`},
                params: {
                    limit: 10,
                    after: cursor,
                }
            })
        const postsData = resp.data.data.children;
        const after = resp.data.data.after;
        dispatch(successPostsDataRequest(postsData, after));
    } catch (e: any) {
        dispatch(errorPostsDataRequest(e));
    }
}
