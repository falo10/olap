import React from "react";
import style from "./Menu.moudule.css"
import useAuth from "../Hoocks/useAuth";
import {Link} from "react-router-dom";

function Menu() {
  const [auth, setAuth] = useAuth();


const login = (e) =>{
  e.preventDefault ();
  setAuth(true);
}
const logout = (e)=> {
  e.preventDefault ();
  setAuth(false);
}

    return (
      <div className={`${style.menuContainer} breadcrumb`}>
         <ul className={style.menu}>
         <li className={style.menuItem}>
             <Link to={`/`}>
                 home
             </Link>
           </li>
         {auth ? (
          <li className={style.menuItem}>
         <a href="#" onClick={logout}> wyloguj</a>
         </li>
         ):( 
          <li className={style.menuItem}>
          <a href="#" onClick={login}> zaloguj </a> 
          </li>
          )
          }
         
         </ul>
      </div>
    );

}

export default Menu;