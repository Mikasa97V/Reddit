import React from 'react';
import styles from './icon.css';
import {EIcons, icons} from "./Icons";
import classNames from "classnames";

interface IIconProps {
    As?: 'span' | 'div';
    icon: EIcons | React.ReactNode;
    width?: number;
    height?: number;
    margin?: string,
    padding?: string,
    className?: string,
}

export function Icon(props: IIconProps) {
    const {
        As = 'div',
        icon,
        width = 12,
        height = 12,
        margin = '0',
        padding = '0',
        className,
    } = props;

    let avatar;

    const classes = classNames(
        styles[`icon-container`],
        { [styles[`${className}`]]: className },
    );

    if (typeof icon === 'number') {
        avatar = icons[icon]
    } else if (icon === undefined || icon === ''){
        avatar = icons[EIcons.block]
     } else {
        avatar = '';
    }


    return (
        <As
            style={{width: width, height: height, margin: margin, padding: padding}}
            className={classes}
        >
            { avatar }
        </As>
    );
}
