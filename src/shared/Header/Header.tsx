import React from 'react';
import styles from './header.css';
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import SearchBlockContainer from "./container/SearchBlockContainer";

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlockContainer/>
            <ThreadTitle />
            <SortBlock />
        </header>
    );
}
