import React, {useState} from 'react';
import styles from './comment.css';
import {LineSeparate} from "../../../utils/react/components/LineSeparate";
import {Icon} from "../../Icon";
import {EIcons} from "../../Icon/Icons";
import {CommentButtons} from "./CommentButtons";
import {normalizeTimestamp} from "../../../utils/js/normalizeTimestamp";
import {Tag} from "../../../utils/react/components/Tag";
import {generateRandomString} from "../../../utils/js/generateRandomIndex";
import CommentFormContainer from "../container/CommentFormContainer";

type Props = {
    comment: any;
    list: any[];
}

export function Comment({comment, list}: Props) {
    const [isAnswer, setIsAnswer] = useState(false);

    return (
        <div className={styles.commentContainer}>
            <div
                className={styles.mainCommentWrap}
                style={{marginLeft: comment.depth * 38}}
            >
                <LineSeparate width='3px' height='calc(100% - 55px)'
                              styleProps={{position: 'absolute', transform: 'translate(8px, 56px)'}}/>
                <div className={styles.decorationWrap}>
                    <div className={styles.arrows}>
                        <button className={styles.up}>
                            <svg width="19" height="10" viewBox="0 0 19 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                            </svg>
                        </button>
                        <button className={styles.down}>
                            <svg width="19" height="10" viewBox="0 0 19 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.commentWrap}>
                    <div className={styles.commentHeader}>
                        <Icon icon={EIcons.accountAnonymous} width={20} height={20}/>
                        <div className={styles.commentMetaData}>
                            <a href="#" className={styles.commentAuthor}>{comment.author}</a>
                            <span className={styles.commentDate}>{normalizeTimestamp(comment.created)}</span>
                        </div>
                        <Tag text={comment.subreddit}/>
                    </div>
                    <div className={styles.commentBody}>{comment.body}</div>
                    <div>
                        <CommentButtons onOpenForm={() => {
                            setIsAnswer(true)
                        }}
                        />
                        {
                            isAnswer && (
                                <CommentFormContainer
                                    authorName={comment.author}
                                    margin='10px 0 0'
                                    onClose={() => setIsAnswer(false)}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            {list?.map(it => {
                const key = generateRandomString();

                if (it.kind === 'more') {
                    return
                }
                return <Comment
                    key={key}
                    comment={it?.data}
                    list={it?.data?.replies?.data?.children}
                />
            })}
        </div>
    );
}
