import React from 'react';
import styles from './commentsbutton.css';
import {Icon} from "../../../../Icon";
import {EIcons} from "../../../../Icon/Icons";

interface ICardControlsCommentsButtonProps {
    commentsNumber?: number;
}

export function CommentsButton({commentsNumber}: ICardControlsCommentsButtonProps) {
    return (
        <button className={styles.commentsButton}>
            <Icon icon={EIcons.comments} />
            <span className={styles.commentsNumber}>{commentsNumber ?? 0}</span>
        </button>
    );
}
