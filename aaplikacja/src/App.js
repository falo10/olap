import {useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Searchbar from './components/UI/Searchbar';
import Layaut from './components/Layaut/Layaut';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/ThemeContext';
import AuthContext from './context/AuthenticContext'
import ReducerContext from './context/ReducerContext'
import InsporingQuote from './components/Header/InspiringQuote';
import  {reducer, intialState} from './context/reducer';
import Home from './context/Home';

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

function App () {
const [state, dispatch]= useReducer (reducer, intialState);

   const searchHandler = term => {
    const newHerbs = [...backendHerbs]
    .filter(x => x.name
      .toLowerCase()
      .includes(term.toLowerCase())
      );
    dispatch({type:'set-herbs', herbs:newHerbs});
   }

const header = (
    <Header>
    <InsporingQuote/>
    <Searchbar onSearch={term =>searchHandler(term)}/>
     <ThemeButton/>
    </Header>
    );

  const content = ( 
  <>
<Route exact={true} path ='/'>
<Home/>
</Route>

<Route path='/herb/:id'>
  <h1>to jest ziółko...</h1>
</Route>   
    </>
    );

  const menu =<Menu/>;
  const footer = <Footer/>;

  return (
    <Router>
    <AuthContext.Provider value={{
      isAuthenticated:state.isAuthenticated,
    login: () => dispatch({type:'login'}),
    logout: () => dispatch({type: 'logout'})

    }}>

    <ThemeContext.Provider value={{
      color: state.theme,
      changeTheme: () => dispatch({type:'change-theme'})
    }}>
  <ReducerContext.Provider value={{
    state:state,
    dispatch: dispatch
  }}>
  <Layaut
    header={header}
    menu={menu}
    content={content}
    footer={footer}
  />
  </ReducerContext.Provider>

  </ThemeContext.Provider> 
  </AuthContext.Provider>
  </Router>
);}

export default App;

