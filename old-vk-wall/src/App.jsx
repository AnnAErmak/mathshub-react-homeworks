import React, {useEffect, useState} from "react";
import styles from './App.module.css';
import FormMessage from "./components/Form-message";
import Post from "./components/Post/index.jsx";

function App() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchPostsHandler = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://old-vk-wall-default-rtdb.europe-west1.firebasedatabase.app/posts.json')

            if (!response.ok) {
                throw new Error('Что-то пошло не так!');
            }

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
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    const addPostHandler = async (textPost) => {
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
            fetchPostsHandler()
        }
    }

    const addLikeHandler = async (id) => {

        try {
            const post = posts.filter(item => item.id === id)
            const likeCount = post[0].likeCount + 1

            await fetch(`https://old-vk-wall-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`, {
                method: 'PATCH',
                body: JSON.stringify({
                    likeCount,
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            })
            fetchPostsHandler()
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchPostsHandler()
    }, [])

    // let content = <p>Нет ни одного поста. Будьте первым!</p>;

    // if (posts.length > 0) {
    //     content = <input/>;
    // }

    // if (error) {
    //     content = <p>{error}</p>;
    // }
    //
    // if (isLoading) {
    //     content = <p>Загрузка...</p>;
    // }

    return (
        <>
            <FormMessage onPostHandler={addPostHandler}/>

            <div className={styles.postsWrapper}>
                {/* {content} */}
                {posts.map(post => (
                    <Post key={post.id} addLikeHandler={addLikeHandler} post={post}/>
                ))}
            </div>
        </>
    )
}

export default App
