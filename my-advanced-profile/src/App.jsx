import React from "react";
import Profile from "./components/Profile";
import './App.css'
import {Counter} from "./components/Counter";

export default function App() {

    const userData = {
        urlImage: './assets/avatar.jpg',
        name: 'Ермак Анна',
        textBio: 'Люблю фронтенд и все, что с ним связано',
        hobbies: ["Frontend", "Художественная литература", "Длительные заезды на велике"],
        citation: "Зенит — это наивысшая для наблюдателя точка на небосклоне в вертикальном направлении, которую, как известно, можно легко определить с помощью вертикального отвеса.",
    }

    return (
        <div className='app'>
            <Profile userData={userData}/>
            <Counter />
        </div>
    );
}