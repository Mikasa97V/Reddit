import React from 'react';
import styles from './tag.css';

export function Tag({text}: { text: string }) {
    return (
        <div className={styles.tagWrap}>
            <span className={styles.tagText}>{text}</span>
        </div>
    );
}
