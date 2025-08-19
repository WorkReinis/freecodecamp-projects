import "./QuoteCard.css";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function QuoteCard({ quote, onButtonClick }) {
    const [fadeState, setFadeState] = useState("fade-in");

    // Logic that determines the fade
    const toggleFade = () => {
        if (fadeState === "fade-in") {
            setFadeState("fade-out");
            setTimeout(() => {
                setFadeState("fade-in");
            }, 1000);
        }
    };

    // Logic that performs quote composition into a tweet
    const twitterText = encodeURIComponent(`${quote.quote}\n-${quote.author}`);

    return (
        <div id="quote-box">
            <div className={`box ${fadeState}`}>
                <p id="text" className="mb-3 text-start fs-4 ">
                    <FaQuoteLeft id="quote-symbol" size={18} />
                    {quote.quote}
                </p>
                <p id="author" className="text-end fs-6">
                    - {quote.author}
                </p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <a
                    id="tweet-quote"
                    className="btn btn-primary rounded-pill fs-6 d-flex align-items-center px-3 gap-1"
                    href={`https://twitter.com/intent/tweet?text=${twitterText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitterX id="" size={16} />
                    Share
                </a>

                <button
                    id="new-quote"
                    className="btn btn-primary rounded-pill fs-6 px-3"
                    onClick={() => {
                        onButtonClick();
                        toggleFade();
                    }}
                >
                    New Quote
                </button>
            </div>
        </div>
    );
}

export default QuoteCard;
