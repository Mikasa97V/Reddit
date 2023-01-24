import React from 'react';
import styles from './actionbuttons.css';
import {Icon} from "../../Icon";
import {EIcons} from "../../Icon/Icons";

interface IActionButtonsProps {
    num_comments?: number;
    upvote_ratio?: number;
}

export function ActionButtons({num_comments, upvote_ratio}: IActionButtonsProps) {
    const upvoteRatio = (upvote_ratio || 0) * 100;
    return (
        <div className={styles.container}>
            <div className={styles.actionButtons}>
                <button className={styles.buttonWrap}>
                    <Icon icon={EIcons.comments}/>
                    <span className={styles.numberComments}>{num_comments || 0}</span>
                    <span className={styles.buttonTitle}>Комментарии</span>
                </button>
                <button className={styles.buttonWrap}>
                    <Icon icon={EIcons.share}/>
                    <span className={styles.buttonTitle}>Поделиться</span>
                </button>
                <button className={styles.buttonWrap}>
                    <Icon icon={EIcons.block}/>
                    <span className={styles.buttonTitle}>Скрыть</span>
                </button>
                <button className={styles.buttonWrap}>
                    <Icon icon={EIcons.save}/>
                    <span className={styles.buttonTitle}>Сохранить</span>
                </button>
                <button className={styles.buttonWrap}>
                    <Icon icon={EIcons.warning}/>
                    <span className={styles.buttonTitle}>Пожаловаться</span>
                </button>
            </div>
            <div className={styles.votedWrap}>
                <div className={styles.votedPercentages}>{upvoteRatio}%</div>
                <div className={styles.votedTitle}>Проголосовали</div>
            </div>
        </div>
    );
}
