import {Reducer} from "redux";
import {UPDATE_COMMENT} from "./commentAction";

export type TComment = {
    commentText: string;
}

const initialState: TComment = {
    commentText: '',
}

export const commentReducer: Reducer<TComment> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            }
        default:
            return state;
    }
}
