import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {IDataChildrenPosts} from "../../utils/interfaces/IDataChildrenPosts";
import {connect} from "react-redux";
import {TRootState} from "../../redux/rootReducer";
import {EColors, Text} from "../Text";
import {bindActionCreators} from "redux";
import {postsDataAsyncRequest} from "../../redux/postData/postDataAction";
import {generateRandomString} from "../../utils/js/generateRandomIndex";

interface ICardsListProps {
    data?: IDataChildrenPosts[];
    loading?: boolean;
    errorLoading?: any;
    after?: string;
    postsDataAsyncRequest: (after?: string) => void;
}

function CardsList(props: ICardsListProps) {
    const {
        data,
        loading,
        errorLoading,
        after,
        postsDataAsyncRequest,
    } = props;

    const bottomOfList = useRef<HTMLDivElement>(null);
    const [posts, setPosts] = useState<IDataChildrenPosts[] | undefined>(data);
    const [loadCount, setLoadCount] = useState(0);
    const isEmptyList = posts?.length === 0 && !loading && errorLoading?.message === undefined;

    useEffect(() => {
        if (!data) return
        if (!posts || !posts.length) {
            setPosts(data)
        } else {
            setPosts([...posts, ...data])
        }
    }, [data])

    useEffect(() => {
        if (after === undefined) return
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && loadCount < 2) {
                postsDataAsyncRequest(after);
                setLoadCount(loadCount + 1);
            }
        }, {
            rootMargin: '100px',
        });

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        };
    }, [after, loadCount]);

    return (
        <ul className={styles.cardsList}>
            {isEmptyList && (
                <div className={styles.listLoading}>
                    <Text size={20} color={EColors.grey99}>Список пуст!</Text>
                </div>
            )}

            {posts && posts.map((it: IDataChildrenPosts) => {
                const generatedRandomKey = generateRandomString();
                const key = it.data.id + generatedRandomKey;
                return <Card
                    data={it.data}
                    key={key}
                />
            })}
            {!isEmptyList && loadCount === 2 && (
                <button
                    className={styles.loadMoreBtn}
                    onClick={() => setLoadCount(0)}
                >Загрузить ещё !</button>
            )}

            <div ref={bottomOfList}></div>

            {loading && loadCount < 2 && (
                <div className={styles.listLoading}>
                    <Text size={20} color={EColors.grey99}>Загрузка...</Text>
                </div>
            )}

            {errorLoading && (
                <div className={styles.listLoading}>
                    <Text size={20} color={EColors.grey99}>{errorLoading?.message}</Text>
                </div>
            )}
        </ul>
    );
}

const mapStateToProps = (state: TRootState) => {
    return {
        data: state.postData.posts,
        after: state.postData.request.after,
        loading: state.postData.request.loading,
        errorLoading: state.postData.request.error,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        postsDataAsyncRequest: bindActionCreators(postsDataAsyncRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
