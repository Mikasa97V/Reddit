import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {useNavigate, useParams} from 'react-router-dom';
import styles from './postmodal.css';
import {Comment} from "../Comments/Comment";
import {IDataChildrenPosts} from "../../utils/interfaces/IDataChildrenPosts";
import {useComments} from "../../hooks/useComments";
import {ModalHeader} from "./ModalHeader";
import {ActionButtons} from "./ActionButtons";
import {generateRandomString} from "../../utils/js/generateRandomIndex";
import CommentFormContainer from "../Comments/container/CommentFormContainer";
import {TRootState} from "../../redux/rootReducer";
import {connect} from "react-redux";


interface IPostModalProps {
    allPosts?: IDataChildrenPosts[],
}


function PostModal(props: IPostModalProps) {
    const {allPosts} = props;
    const ref = useRef<HTMLDivElement>(null);
    const {id} = useParams();
    const data = allPosts?.find((post) => post.data.id === id)?.data;
    const [comments] = useComments(id || '', data?.subreddit || '');
    const navigate = useNavigate();
    const goBack = () => navigate(-1);


    function modalHandlerClick(e: MouseEvent) {
        if (e.target instanceof Node && !ref.current?.contains(e.target)) {
            goBack();
        }
    }

    useEffect(() => {
        document.addEventListener('click', modalHandlerClick);
        return () => document.removeEventListener('click', modalHandlerClick)
    }, [ref]);

    const node = document.querySelector('#modal_root');
    if (!node) return null;


    return ReactDOM.createPortal((
        <>
            <div className={styles.modal} ref={ref}>
                <ModalHeader data={data} onClose={goBack}/>
                {
                    <div className={styles.postText}>{data?.selftext || 'The text of the post was not found :('}</div>
                }
                <ActionButtons num_comments={data?.num_comments} upvote_ratio={data?.upvote_ratio}/>
                <CommentFormContainer margin='0 0 35px 0'/>
                <div className={styles.sortWrap}>
                    <span className={styles.sortText}>Сортировать по:</span>
                    <span className={styles.sortFilterText}>Лучшие</span>
                </div>
                {comments.map(it => {
                    const key = generateRandomString();
                    if (it.kind === 'more') {
                        return
                    }
                    return <Comment
                        key={key}
                        comment={it?.data}
                        list={it?.data?.replies?.data?.children}
                    />
                })}
            </div>
        </>
    ), node);
}

const mapStateToProps = (state: TRootState) => {
    return {
        allPosts: state.postData.allPosts,
    }
}

export default connect(mapStateToProps, null)(PostModal)
