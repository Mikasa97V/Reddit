import React from 'react';
import styles from './menuitem.css';
import {EColors, Text} from "../../../../../Text";
import classNames from 'classnames';


interface IMenuItemProps {
    postId: string
    text: string
    icon: React.ReactNode
    showOn?: EScreen
    showDivider?: EDivider;
}

export enum EScreen {
    desktop = 'desktop',
    mobile = 'mobile',
    allScreen = 'allScreen',
}

export enum EDivider {
    showDivider = 'divider',
    hideDivider = 'hideDivider',
}


export function MenuItem(props: IMenuItemProps) {
    const {
        postId,
        text,
        icon,
        showOn = EScreen.allScreen,
        showDivider = EDivider.showDivider,
    } = props

    const classes = classNames(
        styles[`menuItem`],
        styles[showOn],
    );

    const classesDivider = classNames(
        styles[showOn],
        styles[showDivider],
    );

    return (
        <>
            <li className={classes} onClick={() => console.log(postId)}>
                {icon}
                <Text size={12} color={EColors.grey99}>{text}</Text>
            </li>
            <div className={classesDivider}></div>
        </>
    );
}
