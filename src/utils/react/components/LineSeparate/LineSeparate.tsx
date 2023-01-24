import React, {StyleHTMLAttributes} from 'react';
import styles from './lineseparate.css';
import classNames from "classnames";

export enum EColors {
    black = 'black',
    orange = 'orange',
    green = 'green',
    white = 'white',
    grayF4 = 'grayF4',
    greyF3 = 'greyF3',
    greyD9 = 'greyD9',
    greyC4 = 'greyC4',
    grey99 = 'grey99',
    grey66 = 'grey66',
}

interface ILineSeparate {
    width?: string;
    height?: string;
    margin?: string;
    color?: EColors;
    [key: string]: any
    // position?: 'vertically' | 'horizontally';
}

export function LineSeparate(props: ILineSeparate) {
    const {
        width = '100%',
        height = '1px',
        margin = '0',
        color = EColors.greyD9,
        // position = 'horizontally',
        styleProps,
    } = props

    const classesColor = classNames(
        styles[color],
        // styles[position]
    )

    return (
        <div style={{
            width: width,
            height: height,
            margin: margin,
            ...styleProps,
        }}
             className={classesColor}
        ></div>
    );
}
