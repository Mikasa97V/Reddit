import {ActionCreator, AnyAction} from "redux";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})
