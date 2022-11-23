
import styles from "./Searchbar.module.css";
import { useContext, useState } from "react";
import PropsTypes from 'prop-types';
import ThemeContext from "../../context/ThemeContext";
import { useEffect } from "react";
import { useRef } from "react";

const propTypes={
  onSearch: PropsTypes.func.isRequired
};


function Searchbar (props){
  const [term, setTerm] = useState ('');
  const theme = useContext (ThemeContext);

  const inputRef = useRef();
  

  const search = () => {
    props.onSearch(term);
  }

  const onKeYDownHandler = e => {
    if (e.key === 'enter') {
      props.onSearch()
    }

  };

  const focusInput = () =>{
        inputRef.current.focus();
  
  }

  useEffect(() => {
    focusInput()

  }, []);


    return(
      <>
      <div className={styles.input}>
      <input 
      ref={inputRef}
      value={term}
      onKeyDown={onKeYDownHandler}
      onChange={e => setTerm(e.target.value)}
      className={styles.input2}
      type="text" 
      placeholder="Znajdz swoje ziółko..."/>
      </div>
  
      <button
      onClick={search}
      className={`ml-1 btn btn-${theme.color}`}>Szukaj</button> 
      </>
      
    );
}

Searchbar.propTypes=propTypes;

export default Searchbar;