import React from 'react';
import './style.css';
import ProfilePicture from "../ProfilePicture";
import ProfileName from "../ProfileName";
import ProfileBio from "../ProfileBio";
import ProfileHobbies from "../ProfileHobbies";
import ProfileCitation from "../ProfileCitation";

function Profile({userData}) {
    return (<>
            <ProfilePicture img={userData.urlImage}/>
            <ProfileName name={userData.name}/>
            <ProfileBio textBio={userData.textBio}/>
            <ProfileHobbies hobbies={userData.hobbies}/>
            <ProfileCitation citation={userData.citation}/>
        </>
    );
}

export default Profile;
