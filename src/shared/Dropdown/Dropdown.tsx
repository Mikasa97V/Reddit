import React, {useEffect, useRef} from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";


interface IDropdownProps {
    children: React.ReactNode;
    onClose?: () => void;
    coords?: {
        top: number;
        left: number;
    }
}


export function Dropdown(props: IDropdownProps) {
    const {
        children,
        onClose,
        coords,
    } = props

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function dropdownHandlerClick(e: MouseEvent) {
            if (e.target instanceof Node && !ref.current?.contains(e.target))
                onClose?.();
        }

        document.addEventListener('click', dropdownHandlerClick);
        return () => document.removeEventListener('click', dropdownHandlerClick);
    }, [])

    const node = document.querySelector('#dropdown_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.listContainer}
             style={{
                 top: `${coords?.top}px`,
                 left: `${coords?.left}px`
             }}
        >
            {children}
        </div>
    ), node)
}
