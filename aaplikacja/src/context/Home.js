import { useEffect,useContext } from 'react';
import LastHerb from '../components/Herbs/Herb/Herb/LastHerb';
import useStateStorage from '../components/Hoocks/useStateStorage';
import BestHerb from '../components/Herbs/Herb/Herb/bestHerb';
import Herbs from "../components/Herbs/Herb/Herb/Herbs";
import ReducerContext from './ReducerContext';
import LoadingIcon from '../components/UI/LoadingIcon/LoadingIcon';

const backendHerbs = [
    {
     id: 1,
     name: 'mięta',
     description: 'opis opis tralal...',
     occurence: " tereny klimatu umiarkowanego, ogródki, łąki...",
     action: "łagodzące dolegliwości układu pokarmowego, pyszne pićku heheh zmienić to of course...",
     rating: "1,2",
    },
    {
      id:2,
      name: 'melisa',
      description: 'opis opis tralal...',
      occurence: " nie mam pojęcia ale na pewno jest to super miejsce ",
      action: "uspokajające kiedy Ola jest wkurzona i głodna",
      rating: "1,5",
      
     },
     {
      id:3,
      name: 'rumianek',
      description: 'opis opis tralal...',
      occurence: "tam gdzie diabeł mówi dobranoc ",
      action: "na każdą dolegliwość która itnieje...hehe",
      rating: "3,2",
  
     },
     {
      id:4,
      name: 'pokrzywa',
      description: 'opis opis tralal...',
      occurence: " akurat łąka którą idzesz koło twojej nogi ",
      action: "piękne włosy, pazy, wszystko xd ",
      rating: "0,9",
  
     }
  ];
  

export default function Home (props) {
    const [lastHerb, setLastHerb] = useStateStorage ('last-hotel', null);
    const reducer= useContext(ReducerContext);

    const getBestHerb = () => {
        if(reducer.state.herbs.length < 2) {
          return null; 
        }else {
          return reducer.state.herbs
          .sort((a,b) => a.rating > b.rating ? -1 : 1)[0];
    }
  }
  const openHerb = (herb) => setLastHerb(herb);
   const removeLastHerb = () => setLastHerb (null);

   useEffect (() =>{
    setTimeout (() => { 
      reducer.dispatch ({type: 'set-herbs', herbs: backendHerbs});
      reducer.dispatch ({type: 'set-loading', lading: false});
    }, 1000);
   }, []);

   if (reducer.state.loading){
    return <LoadingIcon/>;
   } 
    return (
  <>
        {lastHerb ? <LastHerb {...lastHerb} onRemove={removeLastHerb}/> : null}
{getBestHerb()
 ? <BestHerb getHerb={getBestHerb}/> : null
}
<Herbs onOpen ={openHerb} herbs={reducer.state.herbs}/>
</>
    );}