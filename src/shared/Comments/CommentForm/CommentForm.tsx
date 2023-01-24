import React, {ChangeEvent, useEffect, useRef} from 'react';
import styles from './commentform.css';
import {FormButtons} from "./FormButtons";
import {useForm} from "react-hook-form";
import {Action, useStoreActions, useStoreState} from "easy-peasy";

interface ICommentFormProps {
    margin?: string;
    authorName?: string;
    placeholder?: string;
    onClose?: () => void;
}


interface Comment {
    commentValue?: string;
    setCommentValue?: Action<Comment, string>;
}

export const CommentForm = (props: ICommentFormProps) => {
    const {
        margin,
        authorName,
        onClose,
        placeholder,
    } = props;

    const commentValue = useStoreState<Comment>((state) => state.commentValue);
    const setCommentValue = useStoreActions<Comment>((actions) => actions.setCommentValue);
    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
        setFocus,
    } = useForm({
        mode: "onBlur",
    });

    useEffect(() => {
        setFocus('comment');
    }, [setFocus]);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setCommentValue(e.target.value);
    }


    function modalHandlerClick(e: MouseEvent) {
        if (e.target instanceof Node && !formRef.current?.contains(e.target)) {
            onClose?.();
        }
    }

    useEffect(() => {
        document.addEventListener('click', modalHandlerClick);
        return () => document.removeEventListener('click', modalHandlerClick)
    }, [formRef]);

    const onSubmit = (data: any, e: any) => {
        e.preventDefault();
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            style={{margin: margin}}
        >
            <div>
                {errors?.comment &&
                    <p className={styles.errorMessage}>
                        {errors?.comment?.message || 'Ошибка!'}
                    </p>
                }
            </div>
            <textarea
                className={styles.input}
                value={commentValue}
                placeholder={placeholder}
                {...register('comment', {
                    required: 'Введите комментарий',
                    minLength: {
                        value: 2,
                        message: 'Введите минимум 2 символа',
                    },
                    onChange: handleChange
                })}
            />
            <div className={styles.formFooterWrap}>
                <FormButtons/>
                <button type='submit' className={styles.button}>Комментировать</button>
            </div>
        </form>
    );
}
