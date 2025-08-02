import React, { useState, useEffect } from "react";

function Countdown({ minutes, seconds }) {
    const [timeLeft, setTimeLeft] = useState(minutes * 60 + seconds);

    useEffect(() => {
        // Stop logic if time has run out
        if (timeLeft <= 0) return; 

        // Set up an interval to decrease timeLeft every second
        const intervalId = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000); // Interval set to 1000ms = 1 second

        // Cleanup logic on component unmount or update
        return () => clearInterval(intervalId); 
    }, [timeLeft]); // useEffect is rerun whenever timeLeft changes

    // Function to format seconds into MM:SS format
    const formatTime = (t) => {

        // minutes
        const m = Math.floor(t / 60) 
            .toString() 
            .padStart(2, "0"); // Add leading zero if needed

        // seconds
        const s = (t % 60)
        .toString()
        .padStart(2, "0");

        return `${m}:${s}`;
    };

    return <h2>{formatTime(timeLeft)}</h2>; // Display formatted countdown
}

export default Countdown; // Export the Countdown component
