import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Countdown from "./components/Countdown.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [sessionMinutes, setSessionMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [breakMinutes, setBreakMinutes] = useState(5);


    const handleBreakDecrement = () => {
        if (breakMinutes >= 1) {
            setBreakMinutes(breakMinutes - 1);
        }
    }

    const handleBreakIncrement = () => {
        if (breakMinutes <= 59) {
            setBreakMinutes(breakMinutes + 1);
        }
    }

        const handleSessionDecrement = () => {
        if (sessionMinutes >= 1) {
            setSessionMinutes(sessionMinutes - 1);
        }
    }

    const handleSessionIncrement = () => {
        if (sessionMinutes <= 59) {
            setSessionMinutes(sessionMinutes + 1);
        }
    }

    const handleReset = () => {
        setSessionMinutes(25);
        setSeconds(0);
        setBreakMinutes(5);
    }

    return (
        <>
            <div className="App d-flex flex-column justify-content-center align-items-center gap-3">
                <div className="dial d-flex flex-column justify-content-center align-items-center">
                    <h4 className="fs-6" id="timer-label">Session</h4>
                    <Countdown minutes={sessionMinutes} seconds={seconds} className="countdown" id="time-left"/>
                </div>

                <div className="modes d-flex gap-2">
                    <button className="session">Session</button>
                    <button className="break">Break</button>
                </div>

                <div className="time-control d-flex flex-column">
                    <h3 id="session-label">Session Length</h3>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-4">
                        <button className="decrease" id="session-decrement" onClick={handleSessionDecrement}>-</button>
                        <span className="length" id="session-length">{sessionMinutes}</span>
                        <button className="increase" id="session-increment" onClick={handleSessionIncrement}>+</button>
                    </div>
                </div>

                <div className="time-control d-flex flex-column ">
                    <h3 id="break-label">Break Length</h3>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-4">
                        <button className="decrease" id="break-decrement" onClick={handleBreakDecrement}>-</button>
                        <span className="length" id="break-length">{breakMinutes}</span>
                        <button className="increase" id="break-increment" onClick={handleBreakIncrement}>+</button>
                    </div>
                </div>

                <div className="controls d-flex gap-2">
                    <button className="start" id="start_stop">Start</button>
                    <button className="pause">Pause</button>
                    <button className="reset" id="reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default App;
