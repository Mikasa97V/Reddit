import React from 'react';
import styles from './cardpreview.css';

export function Preview({previewImg}: { previewImg?: string }) {
    return (
        <div className={styles.preview}>
            {
                previewImg
                    ? <img
                        className={styles.previewImg}
                        src={previewImg}
                        alt="preview"/>
                    :
                    <img
                        className={styles.previewImg}
                        src='https://thumbs.dreamstime.com/b/no-preview-red-stamp-text-white-56287781.jpg'
                        alt="preview"/>
            }
        </div>
    );
}


