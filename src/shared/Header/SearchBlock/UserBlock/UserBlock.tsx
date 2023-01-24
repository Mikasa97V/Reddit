import React from 'react';
import styles from './userblock.css';
import {Icon} from "../../../Icon";
import {EIcons} from "../../../Icon/Icons";
import {Break} from "../../../Break";
import {EColors, Text} from "../../../Text";
import {connect} from "react-redux";
import {TRootState} from "../../../../redux/rootReducer";

interface IUserBlockProps {
    name: string;
    avatarSrc?: string;
    loading?: boolean;
}

function UserBlock(props: IUserBlockProps) {
    const {name, avatarSrc, loading} = props;

    return (
        <a
            href="https://www.reddit.com/api/v1/authorize?client_id=31Y-455XJDhwrQH3fcCnKQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"
            className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
                    : <Icon icon={EIcons.accountAnonymous} width={50} height={50}/>}
            </div>

            <div className={styles.username}>
                <Break size={12}/>
                {loading ?
                    (
                        <Text size={20} color={EColors.grey99}>Загрузка...</Text>

                    ) : (
                        <Text size={20}
                              color={name !== 'Аноним' ? EColors.black : EColors.grey99}>{name || "Аноним"}</Text>
                    )}
            </div>
        </a>
    );
}

const mapStateToProps = (state: TRootState) => {
    return {
        name: state.userData.user.name,
        avatarSrc: state.userData.user.avatarSrc,
        loading: state.userData.request.loading,
    }
}

export default connect(mapStateToProps, null)(UserBlock)
