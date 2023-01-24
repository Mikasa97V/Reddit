import React from 'react';
import styles from './break.css';
import classNames from "classnames";

type TBreakSize = 4 | 6 | 8 | 12 | 16 | 20;
type TDisplays = 'mobile' | 'tablet' | 'desktop';
type TInside = 'margin' | 'padding';

interface IBreakProps {
    size: TBreakSize,
    indentationType?: TInside,
    mobileSize?: TBreakSize,
    tabletSize?: TBreakSize,
    desktopSize?: TBreakSize,
    inline?: boolean,
    top?: boolean,
}

export function Break(props: IBreakProps) {
    const {
        inline = false,
        top = false,
        size,
        indentationType = 'padding',
        mobileSize,
        tabletSize,
        desktopSize,
    } = props

    const classes = classNames(
     styles[`s-${indentationType}-${size}`],
        { [styles[`mobile_s-${indentationType}-${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s-${indentationType}-${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s-${indentationType}-${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top},
    )

    return (
        <div className={classes} />
    );
}
