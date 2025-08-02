import './QuoteCard.css'
import {useState} from 'react'
import { FaQuoteLeft } from "react-icons/fa";

function QuoteCard( {quote, onButtonClick} ) {
    // Not necessary, but useState fade effect
    const [fadeState, setFadeState] = useState('fade-in'); // Initial fade-in state


    // Logic that determines the fade
    const toggleFade = () => {
        if (fadeState === 'fade-in') {
          setFadeState('fade-out'); // Trigger fade out
          setTimeout(() => {
            setFadeState('fade-in'); // Trigger fade in again after fade-out completes
          }, 1000); // 1 second, matching the fade-out animation duration
        }
    };

    // Variable that performs quote composition into a tweet
    const twitterText = encodeURIComponent(`${quote.quote}\n-${quote.author}`);

    return (
        <div id='quote-box'>
            <div className={`box ${fadeState}`}>
                <p id='text' className='mb-3 text-start fs-2 '>
                    <svg 
                        id='quote-symbol' 
                        xmlns='http://www.w3.org/2000/svg' 
                        width='36' 
                        height='36' 
                        fill='currentColor'
                        class='bi bi-quote' 
                        viewBox='0 0 16 16'>
                            <path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/>
                    </svg>
                    {quote.quote}
                </p>
                <p id='author' className='text-end fs-5'>- {quote.author}</p>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <a
                    id='tweet-quote'
                    className='btn btn-primary rounded-pill fs-5 d-flex align-items-center px-4'
                    href={`https://twitter.com/intent/tweet?text=${twitterText}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <svg 
                        xmlns='http://www.w3.org/2000/svg' 
                        width='16' 
                        height='16' 
                        fill='currentColor' 
                        className='bi bi-twitter-x' 
                        viewBox='0 0 16 16'>
                        <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'/>
                    </svg>
                    &nbsp;Share
                </a>
                <button id='new-quote' className='btn btn-primary rounded-pill fs-5 px-4' 
                onClick={() => {
                    onButtonClick();  // Call the function to get a new quote
                    toggleFade();     // Call the function to handle the fade effect
                }}>
                    New Quote
                </button>
            </div>
        </div>
    );
}

export default QuoteCard;
