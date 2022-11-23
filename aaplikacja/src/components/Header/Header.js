import React from "react";
import style from './Header.module.css';
import withMouseposition from "../hoc/withMouseposition";


function Header(props) {
  const paralaxStyles ={
   transform: `translate(
    ${props.mouseX/100}px,
    ${props.mouseY/100}px
    )`
  }
  return (
    <header className={`${style.header}`}>
    <div className={style.headerImage}
     style={paralaxStyles}></div>
      {props.children}
    </header>

  );

}


export default withMouseposition(Header);