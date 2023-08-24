import * as React from 'react';
import {useState} from 'react';
import styles from './style.module.css'


function FormMessage({onPostHandler}) {
    const [textPost, setTextPost] = useState('')

    const onAddPost = () => {
        onPostHandler(textPost)
        setTextPost('')
    }

    return (
        <form className={styles.formMessageWrapper}>
            <input
                className={styles.formMessage}
                onChange={(e) => setTextPost(e.target.value)}
                value={textPost}
                placeholder="Введите Ваше сообщение..."
            />
            <div className={styles.actionWrapper}>
                <button className={styles.button} type="button"
                        onClick={onAddPost}>Отправить
                </button>
            </div>
        </form>
    );
}

export default FormMessage