import React from 'react';
import styles from './controls.css';
import {ActionButtons} from "./ActionButtons";
import {KarmaCounter} from "./KarmaCounter";
import {CommentsButton} from "./CommentsButton";

interface IControlsProps {
    karmaValue: number;
    commentsNumber: number;
    margin?: string;
}

export function Controls(props: IControlsProps) {
    const {
        karmaValue,
        commentsNumber,
        margin = '0 0 0 24px',
    } = props

    return (
        <div className={styles.controls} style={{margin: margin}}>
            <KarmaCounter karmaValue={karmaValue}/>
            <CommentsButton commentsNumber={commentsNumber}/>
            <ActionButtons/>
        </div>
    );
}
