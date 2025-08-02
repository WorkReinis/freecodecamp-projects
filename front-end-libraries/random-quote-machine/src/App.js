import QuoteCard from './components/QuoteCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  // useState where the API quote object will be stored
  const [quote, setQuote] = useState({});
   
    // API quote theme
    var category = 'happiness'

    // API request
    const getQuote = async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
                headers: { 'X-Api-Key': 'gGf1pn15nXIEEyxv1G1pbg==rnRJlrxgkC3AceeX'},
                contentType: 'application/json',});
            setQuote(response.data[0]);
      };

    // useEffect to render a quote when component mounts for the first time
    useEffect(() => {
        getQuote();
    }, []);

  // Passing {quote} prop to child, receiving {getQuote} request from child
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <QuoteCard quote={quote} onButtonClick={getQuote}/>
    </div>
  );
}

export default App;
