import React from 'react';
import './style.css';
import ProfilePicture from "../ProfilePicture";
import ProfileName from "../ProfileName";
import ProfileBio from "../ProfileBio";
import ProfileHobbies from "../ProfileHobbies";
import ProfileCitation from "../ProfileCitation";

function Profile() {
  return (
      <>
        <ProfilePicture/>
        <ProfileName/>
        <ProfileBio/>
        <ProfileHobbies/>
        <ProfileCitation/>
      </>

  );
}

export default Profile;
