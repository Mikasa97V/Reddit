import React from 'react';
import styles from './menuitemslist.css';
import {MenuItem} from "./MenuItem";
import {MenuItemsArray} from "./MenuItemsArray";
import {generateRandomString} from "../../../../../utils/js/generateRandomIndex";

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {

    return (
        <ul className={styles.menuItemsList}>
            {
                MenuItemsArray.map((it) => {
                    const key = generateRandomString();
                    return <MenuItem
                        key={key}
                        postId={postId}
                        text={it.text}
                        icon={it.icon}
                        showOn={it.showOn}
                        showDivider={it.hideDivider}
                    />
                })
            }
        </ul>
    );
}
