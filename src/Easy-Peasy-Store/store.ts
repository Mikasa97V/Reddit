import { createStore, action, Action } from 'easy-peasy';

export interface CommentsModel {
    commentValue?: string;
    setCommentValue?: Action<CommentsModel, string>;
}

export const commentStore = createStore<CommentsModel>({
    commentValue: 'Привет из Easy-Peasy!',
    setCommentValue: action((state, payload) => {
        state.commentValue = payload;
    }),
});
