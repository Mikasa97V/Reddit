import React from 'react';
import styles from './modalheader.css';
import {Icon} from "../../Icon";
import {EIcons} from "../../Icon/Icons";
import {Controls} from "../../CardsList/Card/Controls";
import {IPostData} from "../../../utils/interfaces/IDataChildrenPosts";
import {normalizeTimestamp} from "../../../utils/js/normalizeTimestamp";
import {Thumbnail} from "../../../utils/react/components/Thumbnail";
import {Tag} from "../../../utils/react/components/Tag";

interface IModalHeaderProps {
    data?: IPostData;
    onClose?: () => void;
}

export function ModalHeader({data, onClose}: IModalHeaderProps) {
    return (
        <div className={styles.modalHead}>
            <div className={styles.closeBtn} onClick={onClose}>
                <Icon icon={EIcons.closeButton} width={21} height={21} As='div'/>
            </div>
            <Controls
                karmaValue={data?.ups ?? 0}
                commentsNumber={256}
                margin='0'
            />
            <div className={styles.textContent}>
                <div className={styles.title}>
                    <h3 className={styles.postLink}>{data?.title}</h3>
                </div>
                <div className={styles.metadataWrap}>
                    <div className={styles.metadata}>
                        <div className={styles.postDate}>{normalizeTimestamp(data?.created || 0)}</div>
                        <Thumbnail thumbnail={data?.sr_detail.icon_img}/>
                        <a href="#user-url" className={styles.author}>{data?.author}</a>
                    </div>
                    <Tag text={data?.subreddit || ''}/>
                </div>
            </div>
        </div>
    );
}
