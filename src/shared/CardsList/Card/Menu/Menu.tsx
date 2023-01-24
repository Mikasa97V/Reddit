import React, {useRef, useState} from 'react';
import styles from '../Menu/menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";
import {EColors, Text} from "../../../Text";
import {Icon} from "../../../Icon";
import {EIcons} from "../../../Icon/Icons";

type TCoord = {
    top: number,
    left: number,
}

export function Menu({id}: { id: string }) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [coords, setCoord] = useState<TCoord>({top: 0, left: 0});
    const ref = useRef<HTMLDivElement>(null);

    function toggleDropdown() {
        setIsDropDownOpen(!isDropDownOpen);
    }

    const onMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
        let targetCoord = e.currentTarget.getBoundingClientRect();
        let left = targetCoord.left - e.currentTarget.clientWidth * 2;
        let top = targetCoord.top + e.currentTarget.clientHeight * 1.75 + window.scrollY;
        setCoord({top, left});
        toggleDropdown();
    }

    return (
        <div className={styles.menu}>
            <div onClick={onMenuClick} ref={ref}>
                <button className={styles.menuButton}>
                    <Icon icon={EIcons.menu} width={5} height={20}/>
                </button>
            </div>
            {isDropDownOpen &&
                <Dropdown coords={coords} onClose={toggleDropdown}>
                    <div className={styles.dropdown}>
                        <MenuItemsList postId={'desfesf'}/>
                        <button className={styles.closeButton} onClick={toggleDropdown}>
                            <Text mobileSize={12} size={14} color={EColors.grey66}>
                                Закрыть
                            </Text>
                        </button>
                    </div>
                </Dropdown>
            }
        </div>
    );
}
