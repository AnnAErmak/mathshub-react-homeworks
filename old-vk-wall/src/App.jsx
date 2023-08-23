import {AiFillHeart} from 'react-icons/ai';
import React, {useEffect, useState} from "react";
import styles from './App.module.css';

function App() {
    const [posts, setPosts] = useState([])
    const [textPost, setTextPost] = useState('')
    const [error, setError] = useState(null)

    const changeTextPostHandler = (text) => {
        setTextPost(text)
    }
    const fetchPostsHandler = async () => {
        const response = await fetch('https://old-vk-wall-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        const data = await response.json()

        const loadingPosts = []

        Object.keys(data).forEach(key => {
            loadingPosts.push({
                id: key,
                name: data[key].name,
                date: data[key].date,
                likeCount: data[key].likeCount,
                avatar: data[key].avatar,
                text: data[key].text,
            })
            setPosts(loadingPosts)
        })
    }

    const addPostHandler = async () => {

        // const respons = await fetch('https://api.dicebear.com/6.x/icons/svg?')
        // const data = await respons.blob()
        // console.log(data)
        if (textPost.trim() === '') return
        try {
            await fetch('https://old-vk-wall-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        name: 'Anna Ermak',
                        date: new Date().toLocaleDateString(),
                        likeCount: 0,
                        avatar: `https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${Math.random()}`,
                        text: textPost.trim(),
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
        } catch (err) {
            setError(err.message)
        } finally {
            setTextPost('')
            fetchPostsHandler()
        }

    }


    useEffect(() => {
        fetchPostsHandler()
    }, [])
    return (
        <>
            <div className={styles.formMessageWrapper}>
                <input onChange={(e) => changeTextPostHandler(e.target.value)} value={textPost}
                       placeholder="Введите Ваше сообщение"/>
                <div>
                    <button className={styles.button} type="button"
                            onClick={addPostHandler}>Отправить
                    </button>
                </div>
            </div>
            <div className={styles.postsWrapper}>
                {posts.map(post => (
                    <div key={post.id} className={styles.postCard}>
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
                            {post.likeCount}<AiFillHeart className={styles}/>
                        </div>
                    </div>
                ))}

            </div>
        </>

    )
}

export default App
