import React from 'react';

import Navigation from './Navigation';
import './MainHeader.css';

function MainHeader() {
  return (
    <header className='main-header'>
      <h1>Типичная страничка</h1>
      <Navigation />
    </header>
  );
}

export default MainHeader;
