import React from 'react';
import styles from './notfoundpage.css';
import {redirect} from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className={styles.errorPageWrap}>
            <h2 className={styles.errorStatusText}>Error 404 :(</h2>
            <h3 className={styles.errorText}>Page not found...</h3>
            <button
                className={styles.goBackButton}
                onClick={() => {
                redirect("/")
            }}>
                Go back
            </button>
        </div>
    );
}
