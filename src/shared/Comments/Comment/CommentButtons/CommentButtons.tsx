import React from 'react';
import styles from './commentbuttons.css';
import {Icon} from "../../../Icon";
import {EIcons} from "../../../Icon/Icons";

interface ICommentButtonsProps {
    onOpenForm?: () => void;
}

export function CommentButtons({onOpenForm}: ICommentButtonsProps) {
  return (
    <div className={styles.commentButtonsWrap}>
      <button
          className={styles.buttonWrap}
          onClick={onOpenForm}
      >
        <Icon icon={EIcons.comments} width={15} height={15}/>
        <span className={styles.buttonText}>Ответить</span>
      </button>
        <button className={styles.buttonWrap}>
            <Icon icon={EIcons.share} width={15} height={15}/>
            <span className={styles.buttonText}>Поделиться</span>
        </button>
        <button className={styles.buttonWrap}>
            <Icon icon={EIcons.warning} width={15} height={15}/>
            <span className={styles.buttonText}>Пожаловаться</span>
        </button>
    </div>
  );
}
