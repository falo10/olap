import ThemeContext from "../../../context/ThemeContext";
import { useContext } from "react";

export default function LoadingIcon (props) {
   const theme = useContext (ThemeContext);
return (
   
      <div className="d-flex justify-content-center">
      <div className={`spinner-border m-5 text-${theme.color}`} role="status"> 
       <span className="sr-only"></span>
    </div>
    </div>
    );
    }