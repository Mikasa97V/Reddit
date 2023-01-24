import React from 'react';
import styles from './textcontent.css';
import {MetaData} from "./MetaData";
import {IPostData} from "../../../../utils/interfaces/IDataChildrenPosts";
import {normalizeTimestamp} from "../../../../utils/js/normalizeTimestamp";
import {Link} from "react-router-dom";

interface ICardTextContentProps {
    data: IPostData;
}

export function TextContent({data}: ICardTextContentProps) {
    return (
        <div className={styles.textContent}>
            <MetaData
                authorName={data.author}
                thumbnail={data.sr_detail.icon_img}
                date={normalizeTimestamp(data.created, false)}

            />
            <div className={styles.title}>
                <Link to={`/posts/${data.id}`} className={styles.postLink}>
                    {data.title}
                </Link>
            </div>
        </div>
    );
}
