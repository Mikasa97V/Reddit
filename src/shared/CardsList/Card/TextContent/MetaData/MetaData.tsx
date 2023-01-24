import React from 'react';
import styles from './metadata.css';
import {IDate} from "../../../../../utils/interfaces/IDate";
import {Thumbnail} from "../../../../../utils/react/components/Thumbnail";

interface ICardTextContentMetaDataProps {
    authorName: string;
    thumbnail?: string;
    date: IDate | string
}

export function MetaData({authorName, thumbnail, date}: ICardTextContentMetaDataProps) {
    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                <Thumbnail thumbnail={thumbnail}/>
                <a href="#user-url" className={styles.username}>{authorName}</a>
            </div>
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                {date}
            </span>
        </div>
    );
}
