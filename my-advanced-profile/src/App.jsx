import React, {useState} from "react";
import Profile from "./components/Profile";
import './App.css'
import {Counter} from "./components/Counter";

export default function App() {
    const [count, setCount] = useState(0)
    const userData = {
        urlImage: './assets/avatar.jpg',
        name: 'Ермак Анна',
        textBio: 'Люблю фронтенд и все, что с ним связано',
        hobbies: ["Frontend", "Художественная литература", "Длительные заезды на велике"],
        citation: "Зенит — это наивысшая для наблюдателя точка на небосклоне в вертикальном направлении, которую, как известно, можно легко определить с помощью вертикального отвеса.",
    }

    const incrementCount = () => {
         setCount(count + 1)
     }
    const decrementCount = () => {
            setCount(count - 1)
    }

    return (
        <div className='app'>
            <Profile userData={userData}/>
            <Counter count={count} decrementCount={decrementCount} incrementCount={incrementCount}/>
        </div>
    );
}