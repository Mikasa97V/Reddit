import {Reducer} from "redux";
import {
            ERROR_USER_DATA_REQUEST, SET_TOKEN,
            SUCCESS_USER_DATA_REQUEST, USER_DATA_LOADING
        } from "./userDataAction";
import {TRequest} from "../rootReducer";

export type TUser = {
    name: string;
    avatarSrc?: string;
}

export type TUserData = {
    token: string;
    user: TUser;
    request: TRequest;
}

const initialState: TUserData = {
    token: '',
    user: {
        name: 'Аноним',
    },
    request: {
        loading: false,
        error: '',
    }
}

export const userDataReducer: Reducer<TUserData> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.value,
            }

        case USER_DATA_LOADING:
            return {
                ...state,
                request: {
                    loading: true,
                }
            }
        case SUCCESS_USER_DATA_REQUEST:
            return {
                ...state,
                user: {
                    name: action.username,
                    avatarSrc: action.avatarSrc
                },
                request: {
                    loading: false,
                }
            }
        case ERROR_USER_DATA_REQUEST:
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
