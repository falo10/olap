import { useState, useEffect, useLayoutEffect } from "react";

const quotes = [
    'Uprawiaj ogród jakbyś miała żyć wiecznie. – William Kent', 
    '2Mając wolność, kwiaty, książki i księżyc, któż nie byłby w pełni szczęśliwy. ― Oscar Wilde',
     'Możesz wyciąć wszystkie kwiaty, ale nie powstrzymasz nadejścia wiosny. – Pablo Neruda', 
     'Jeśli umiecie patrzeć, zobaczycie, że cały świat jest ogrodem. – Frances Hodgson Burnett', 
     'Możemy narzekać, że róże mają ciernie, lub cieszyć się, że ciernie mają róże. – Alphonse Karr', 
     'Gdzie kwitną kwiaty, kwitnie też nadzieja. – Lady Bird Johnson',
      'Umysły są jak kwiaty, otwierają się tylko wtedy, kiedy nadchodzi właściwy czas. – autor nieznany', 
      'Kwiat nie może kwitnąć bez słońca, a człowiek nie może żyć bez miłości. – Max Muller',
      'Podziwiając ogrody innych ludzi, nie zapominaj o doglądaniu własnych kwiatów. ― Sanober Khan',
      'Kwiaty dają tlen nie tylko naszym płucom, ale i naszej duszy. – Linda Solegato'
];

const styles = {
  color: 'white',
  fontSize:'18px',
  textAlgin:'center',
  justifyContent:'center',
  position: 'absolute',
  marginTop: '-140px',
  fontStyle: 'italic'

};


function InsporingQuote(props) {
    const [quote, setQuote] = useState('Wczytywanie cytatu');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
    }, [loading]);

    return (
        <p style={styles}>{quote}</p>
    );
}

export default InsporingQuote;