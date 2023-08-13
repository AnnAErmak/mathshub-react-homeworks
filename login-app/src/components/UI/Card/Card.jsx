/* eslint-disable react/destructuring-assignment */
import React, {useContext} from 'react';

import './Card.css';
import ThemeContext from "../../../context/theme-context";

function Card(props) {
  const {isThemeLight} = useContext(ThemeContext)

  return <div className={`card ${!isThemeLight && 'dark'} ${props.className}`}>{props.children}</div>;
}

export default Card;
