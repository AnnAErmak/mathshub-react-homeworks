import React from 'react';
import './style.css';

function ProfileCitation({citation}) {
  return (
      <div>
        <blockquote cite="http://www.world.org/zenit/index.html">{citation}</blockquote>
      </div>

  );
}

export default ProfileCitation;
