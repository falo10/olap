


 export const reducer = (state, action) => {
    switch (action.type) {
      case 'change-theme' :
        const theme = state.theme ==='warning' ? 'primary' :'warning';
        return {...state, theme};
        case 'set-herbs':
          return{...state, herbs:action.herbs}
        case 'set-loading':
          return{...state, loading:action.loading}
          case 'logout':
          return{...state, isAuthenticated:false};
        case 'login':
          return{...state, isAuthenticated:true};
          default:
            throw new Error('błąd:'+ action.type);
    }
   
  } 

  export const intialState = {
    herbs: [],
    loading: true,
    isAuthenticated: true,
    theme:'warning'
  };





  
      