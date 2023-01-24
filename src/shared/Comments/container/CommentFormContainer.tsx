import React from 'react';
import {connect} from "react-redux";
import {CommentForm} from "../CommentForm";
import {TRootState} from "../../../redux/rootReducer";
import {updateComment} from "../../../redux/commentData/commentAction";
import {bindActionCreators} from "redux";

interface ICommentFormProps {
    margin?: string;
    authorName?: string;
    onClose?: () => void;
    accountName: string;
    updateComment: (text: string) => void;
}

const CommentFormContainer = (props: ICommentFormProps) => {
    const {
        accountName,
        updateComment,
        onClose,
        margin,
        authorName,
    } = props;
    const authorAppeal = accountName ? accountName + ', оставьте ваш комментарий' : 'Оставьте ваш комментарий';


    return (
        <CommentForm
            onClose={onClose}
            placeholder={authorAppeal}
            margin={margin}
        />
    );
}



const mapStateToProps = (state: TRootState) => {
    return {
        value: state.comment.commentText,
        accountName: state.userData.user.name,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateComment: bindActionCreators(updateComment, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer);
