import React from 'react';
import './style.css';


function ProfileHobbies({hobbies}) {
    return (
        <>
            <h3> Мои хобби: </h3>
            <ul>
                {hobbies.map((hobby, idx) => <li key={idx}> {hobby} </li>)}
            </ul>
        </>
    );
}

export default ProfileHobbies;
