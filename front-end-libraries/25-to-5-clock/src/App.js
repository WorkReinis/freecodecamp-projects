import { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLaptopMac } from 'react-icons/md';
import { PiCoffeeLight } from 'react-icons/pi';
import { IoChevronDown } from 'react-icons/io5';
import { IoChevronUp } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMinus } from 'react-icons/hi';

function App() {
  const myRef = useRef(null);
  const [sessionCountdown, setSessionCountdown] = useState(25 * 60);
  const [breakCountdown, setBreakCountdown] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionCountdownRunning, setSessionCountdownRunning] = useState(false);
  const [breakCountdownRunning, setBreakCountdownRunning] = useState(false);
  const [sessionIsPaused, setSessionIsPaused] = useState(false);
  const [breakIsPaused, setBreakIsPaused] = useState(false);

  const handleStart = () => {
    // Case 1 - nothing is running or paused
    if (
      !sessionCountdownRunning &&
      !sessionIsPaused &&
      !breakCountdownRunning &&
      !breakIsPaused
    ) {
      startSessionCountdown();
    }

    // Case 2 - session timer running
    else if (sessionCountdownRunning) {
      setSessionIsPaused(true);
      clearInterval(myRef.current);
      myRef.current = null;
      setSessionCountdownRunning(false);
    }

    // Case 3 - break timer running
    else if (breakCountdownRunning) {
      setBreakIsPaused(true);
      clearInterval(myRef.current);
      myRef.current = null;
      setBreakCountdownRunning(false);
    }
    // Case 4 - session timer paused
    else if (sessionIsPaused) {
      setSessionIsPaused(false);
      startSessionCountdown();
    }

    // Case 5 - break timer paused
    else if (breakIsPaused) {
      setBreakIsPaused(false);
      startBreakCountdown();
    } else return;
  };

  // Function to start session countdown
  const startSessionCountdown = () => {
    // If countdown is already running do nothing
    if (myRef.current) return;
    setSessionCountdownRunning(true);

    // Countdown and toggle logic
    myRef.current = setInterval(() => {
      setSessionCountdown((prevTime) => {
        console.log('session value is', prevTime);
        if (prevTime <= 0) {
          clearInterval(myRef.current);
          myRef.current = null;
          setSessionCountdownRunning(false);
          playAlarm();
          setSessionCountdown(sessionTime * 60);
          startBreakCountdown();
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Function to start session countdown
  const startBreakCountdown = () => {
    // If countdown is already running do nothing
    if (myRef.current) return;
    setBreakCountdownRunning(true);

    // Countdown and toggle logic
    myRef.current = setInterval(() => {
      setBreakCountdown((prevTime) => {
        console.log('break value is', prevTime);
        if (prevTime <= 0) {
          clearInterval(myRef.current);
          myRef.current = null;
          setBreakCountdownRunning(false);
          playAlarm();
          setBreakCountdown(breakTime * 60);
          startSessionCountdown();
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Reset functionality
  const handleReset = () => {
    clearInterval(myRef.current);
    myRef.current = null;
    setSessionCountdown(25 * 60);
    setBreakCountdown(5 * 60);
    setSessionTime(25);
    setBreakTime(5);
    stopAlarm();
    setSessionCountdownRunning(false);
    setBreakCountdownRunning(false);
    setSessionIsPaused(false);
    setBreakIsPaused(false);
  };

  // Session time adjustments
  const handleSessionPlus = () => {
    setSessionCountdown((prevTime) => {
      if (prevTime < 60 * 60) {
        return prevTime + 60;
      } else {
        return (prevTime = 60 * 60);
      }
    });

    setSessionTime((prevTime) => {
      if (prevTime < 60) {
        return prevTime + 1;
      } else {
        return (prevTime = 60);
      }
    });
  };

  const handleSessionMinus = () => {
    setSessionCountdown((prevTime) => {
      if (prevTime > 60) {
        return prevTime - 60;
      } else return (prevTime = 60);
    });

    setSessionTime((prevTime) => {
      if (prevTime > 1) {
        return prevTime - 1;
      } else return (prevTime = 1);
    });
  };

  // Break time adjustments
  const handleBreakPlus = () => {
    setBreakCountdown((prevTime) => {
      if (prevTime < 60 * 60) {
        return prevTime + 60;
      } else {
        return (prevTime = 60 * 60);
      }
    });

    setBreakTime((prevTime) => {
      if (prevTime < 60) {
        return prevTime + 1;
      } else {
        return (prevTime = 60);
      }
    });
  };

  const handleBreakMinus = () => {
    setBreakCountdown((prevTime) => {
      if (prevTime > 60) {
        return prevTime - 60;
      } else {
        return (prevTime = 60);
      }
    });

    setBreakTime((prevTime) => {
      if (prevTime > 1) {
        return prevTime - 1;
      } else {
        return (prevTime = 1);
      }
    });
  };

  // Conversion to MM:SS format
  function formatTime(min) {
    const totalSec = min;
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // Function to play alarm sound
  const playAlarm = () => {
    const audio = document.getElementById('beep');
    audio.currentTime = 0;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Playback failed:', error);
      });
    }
  };

  // Function to stop alarm sound
  const stopAlarm = () => {
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  // Increment button styling
  const secondaryButtons =
    'w-14 h-14 flex items-center justify-center ext-white hover:scale-110 disabled:opacity-30  transition-transform duration-300 ease-out';
  const primaryButtons =
    'w-20 h-20 flex items-center justify-center rounded-full border hover:bg-white/10 shadow-2xl';

  return (
    <div
      className="w-screen h-screen flex items-center justify-center gap-2
        flex-col bg-gradient-to-br from-[#3d4190] via-[#60658b] to-[#969bdc]"
    

    >
      <div
        className="p-5 w-fit rounded-[50px] flex flex-col gap-12 items-center
          justify-center bg-gradient-to-br from-lp-dark via-lp-light to-lp-dark
          text-white font-sans relative shadow-2xl"
      >
        {/* Timer Circle */}
        <div className="flex flex-col items-center justify-center relative">
          <div
            className="w-72 h-72 rounded-full flex flex-col items-center
              justify-center
              shadow-[30px_30px_60px_rgba(18,22,49,1),_-30px_-30px_80px_rgba(41,44,89,1)]
              bg-gradient-to-br from-lp-dark to-lp-light"
          >
            <div
              className="w-64 h-64 bg-lp-dark flex items-center justify-center
                rounded-full"
            >
              <h2
                id="timer-label"
                className="text-xl text-slate-300 absolute bottom-16"
              >
                {breakIsPaused || sessionIsPaused
                  ? 'Resume'
                  : sessionCountdownRunning
                    ? 'Session'
                    : breakCountdownRunning
                      ? 'Break'
                      : 'Press Start'}
              </h2>
              <div id="time-left" className="text-7xl font-bold">
                {sessionCountdownRunning
                  ? formatTime(sessionCountdown)
                  : breakCountdownRunning
                    ? formatTime(breakCountdown)
                    : formatTime(sessionCountdown)}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-8">
          <button
            onClick={handleStart}
            id="start_stop"
            className={primaryButtons}
          >
            {sessionCountdownRunning || breakCountdownRunning ? (
              <FaPause size={32} />
            ) : (
              <FaPlay size={24} />
            )}
          </button>
          <button onClick={handleReset} id="reset" className={primaryButtons}>
            <FaArrowRotateLeft size={28} />
          </button>
        </div>

        {/* Bottom Control Panel */}
        <div className="flex flex-col w-100 gap-2">
          {/* Session Length */}
          <div className="w-full flex flex-col items-center">
            <span id="session-label" className="text-md">
              Session Length
            </span>
            <div
              className="w-100 flex flex-row items-center justify-between px-4"
            >
              <button
                onClick={handleSessionMinus}
                disabled={sessionCountdownRunning}
                id="session-decrement"
                className={secondaryButtons}
              >
                <HiOutlineMinus size={18} />
              </button>
              <div className="flex flex-col items-center justify-center">
                <div id="session-length" className="text-xl">
                  {sessionTime}
                </div>
              </div>
              <button
                onClick={handleSessionPlus}
                disabled={sessionCountdownRunning}
                id="session-increment"
                className={secondaryButtons}
              >
                <GoPlus size={26} />
              </button>
            </div>
          </div>

          {/* Break Length */}
          <div className="w-full flex flex-col items-center">
            <span id="break-label" className="text-md">
              Break Length
            </span>
            <div
              className="w-100 flex flex-row items-center justify-between px-4"
            >
              <button
                onClick={handleBreakMinus}
                disabled={sessionCountdownRunning}
                id="break-decrement"
                className={secondaryButtons}
              >
                <HiOutlineMinus size={18} />
              </button>
              <div className="flex flex-col items-center justify-center">
                <div id="break-length" className="text-xl">
                  {breakTime}
                </div>
              </div>
              <button
                onClick={handleBreakPlus}
                disabled={sessionCountdownRunning}
                id="break-increment"
                className={secondaryButtons}
              >
                <GoPlus size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Beep */}
        <audio
          id="beep"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
          preload="auto"
        ></audio>
      </div>

      <div className="text-white/50 text-sm font-light">
        Designed and Developed by{' '}
        <a
          href="https://github.com/WorkReinis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-sm font-semibold no-underline
            hover:underline"
        >
          Reinis
        </a>
      </div>
    </div>
  );
}

export default App;
