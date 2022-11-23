import { useState, useEffect} from "react";
import moment from 'moment';

const BestHerb = (props) => {
    const [time, setTime] = useState(' ')
    
    const herb = props.getHerb();
    const endTime = moment().add(23, 'minutes').add(34, 'seconds');
    let interval = null;


    useEffect(() => {
       interval = setInterval(() => {
            const leftTime = -moment().diff(endTime) / 1000;
            const minutes = Math.floor(leftTime / 60);
            const seconds = Math.floor(leftTime%60);
            setTime(` ${minutes}  minuta,${seconds} sekundy`);
            console.log(leftTime)
        },1000);

        return () => {
        clearInterval(interval);
        };

    },[]);




    if (!herb) return null;
    return (
        <div className="card bg-success text-white">
        <div className="card-header">
        Najlepsza oferta
        </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{herb.name}</h5>
                    <p>Ocena: {herb.rating}</p>
                    </div>
                    <p>Do końca oferty pozostało:{time}</p>
                    <a href="#" className="btn btn-sm btn-light">Pokaż</a>
                </div>
            </div>
    );
}

export default BestHerb;