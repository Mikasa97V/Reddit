import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {RootState} from "../../Root";

/*TOKEN Actions*/
export const SET_TOKEN = 'SET_TOKEN';
/*--------*/

/*USER DATA Actions*/
export const USER_DATA_LOADING = 'USER_DATA_LOADING';
export const SUCCESS_USER_DATA_REQUEST = 'SUCCESS_USER_DATA_REQUEST';
export const ERROR_USER_DATA_REQUEST = 'ERROR_USER_DATA_REQUEST';
/*--------*/

/*TOKEN types*/
export type TSetToken = {
    type: typeof SET_TOKEN,
    value: string,
}
/*--------*/


/*USER DATA types*/
export type TUserDataLoading = {
    type: typeof USER_DATA_LOADING,
}

export type TSuccessUserDataRequest = {
    type: typeof SUCCESS_USER_DATA_REQUEST,
    username: string,
    avatarSrc: string,
}

export type TErrorUserDataRequest = {
    type: typeof ERROR_USER_DATA_REQUEST,
    error: string,
}
/*--------*/


/*TOKEN ActionCreators*/
export const setToken: ActionCreator<TSetToken> = (value) => ({
    type: SET_TOKEN,
    value,
})
/*--------*/


/*USER DATA ActionCreators*/
export const userDataLoading: ActionCreator<TUserDataLoading> = () => ({
    type: USER_DATA_LOADING,
})

export const successUserDataRequest: ActionCreator<TSuccessUserDataRequest> = (username: string, avatarSrc: string) => ({
    type: SUCCESS_USER_DATA_REQUEST,
    username,
    avatarSrc,
})

export const errorUserDataRequest: ActionCreator<TErrorUserDataRequest> = (error: string) => ({
    type: ERROR_USER_DATA_REQUEST,
    error,
})
/*--------*/


export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    const token = localStorage.getItem('token') || window.__token__;
    if (token) {
        dispatch(setToken(token));
        localStorage.setItem('token', token);
    }
}


export const userDataAsyncRequest = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(userDataLoading());
    axios.get('https://oauth.reddit.com/api/v1/me.json',
        {
            headers: {Authorization: `bearer ${getState().userData.token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            const icon = userData.icon_img.split('?')[0];
            dispatch(successUserDataRequest(userData.name, icon));
        })
        .catch((error) => {
            console.log(error);
            dispatch(errorUserDataRequest(error));
        })
}
