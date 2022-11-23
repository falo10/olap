
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const Footer = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={`text-center m-3 text-${theme.color}`}>stopka 2021</div>
    )
};
    

export default Footer;

