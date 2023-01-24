import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls";
import {Preview} from "./Preview";
import {TextContent} from "./TextContent";
import {Menu} from "./Menu";
import {IPostData} from "../../../utils/interfaces/IDataChildrenPosts";

interface ICardProps {
    data: IPostData;
}

export function Card({data}: ICardProps) {

    return (
        <li key={data.id} id={data.id} className={styles.card}>
            <TextContent
                data={data}
            />
            <Preview previewImg={data.sr_detail.header_img || data.sr_detail.banner_img}/>
            <Menu id={data.id}/>
            <Controls commentsNumber={data.num_comments} karmaValue={data.ups}/>
        </li>
    );
}
