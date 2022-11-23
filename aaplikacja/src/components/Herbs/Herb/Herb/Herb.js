import PropsTypes from 'prop-types';
import React from "react";
import styles from './Herb.module.css';
import { useContext } from 'react';
import herbImg from '../../../../assets/images/peppermint-2496355_1280.jpg';
import ThemeContext from '../../../../context/ThemeContext';
import useAuth from '../../../Hoocks/useAuth';
import {Link} from 'react-router-dom';




function Herb (props){
  const theme = useContext(ThemeContext);
  const [auth] = useAuth();

  const clickHandler = e => {
     //e.preventDefault();
     props.onOpen(props);
  }


    return(
        <div className={styles.herb}>
        <h4>{props.name}</h4>
           <img src={herbImg} 
            alt="mięta"/>
           
           <p>{props.description}</p>
           <p>{props.occurence}</p>
           <p>{props.action}</p>
           <p>Ocena: {props.rating}</p>
           <Link to={`/herb/${props.id}`}>
           Pokaż
           </Link>
           {/* <a href='/herb/id'
           onClick={clickHandler}
           className={'btn btn-${theme.color} mt-2 px-4'}>
           Pokaż
           </a> */}
           {auth
             ? <p className='mt-2'>Dostępnosć: 2 szt</p>
             : <p className='mt-2'>Zaloguj</p>
           }
           
        </div>
    );
}

Herb.propTypes = {
   name: PropsTypes.string.isRequired,
   description: PropsTypes.string.isRequired,
   occurence: PropsTypes.string.isRequired,
   action: PropsTypes.string.isRequired,

}


export default Herb;