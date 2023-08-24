import React from "react";
import {AiFillHeart} from "react-icons/ai";
import styles from './style.module.css';

function Post({addLikeHandler, post}) {
    return (
        <div className={styles.postCard}>
            <div className={styles.avatarWrapper}>
                <img alt='avatar' src={post.avatar}/>
            </div>
            <div className={styles.messageWrapper}>
                <p className={styles.nickName}>{post.name}</p>
                <p className={styles.messagePost}> {post.text}</p>
                <time>{post.date}</time>
            </div>
            <div className={styles.LikeWrapper}>
                <p>Мне нравиться</p>
                <p className={styles.likeCount}>
                    {post.likeCount}
                    <AiFillHeart
                        onClick={() => addLikeHandler(post.id)}
                        className={`${styles.iconLike} ${post.likeCount > 0 && styles.active}`}
                    />
                </p>

            </div>
        </div>
    )
}

export default Post