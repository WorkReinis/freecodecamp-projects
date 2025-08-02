import './App.css';
import SoundButton from './components/SoundButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  const [displayText, setDisplayText] = useState('');

  // Store all items in an array
  const keyAudioMap = [
    { key: 'Q', description: 'Heater-1', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
    { key: 'W', description: 'Heater-2', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
    { key: 'E', description: 'Heater-3', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
    { key: 'A', description: 'Heater-4', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
    { key: 'S', description: 'Clap', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
    { key: 'D', description: 'Open-HH', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
    { key: 'Z', description: 'Kick-n\'-Hat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
    { key: 'X', description: 'Kick', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
    { key: 'C', description: 'Closed-HH', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' }
  ];

  
  const handleButtonClick = (event) => {
    // Select display-text value
    const buttonText = event.currentTarget.getAttribute('label');
    setDisplayText(buttonText);

    // Select audio correct audi file
    const audio = event.currentTarget.querySelector('audio');
    audio.currentTime = 0;

    // Promise based playback to deal with errors. Otherwise use audio.play()
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Playback failed:', error);
      });
    }
  };

  // Listens for keyboard clicks and simulates corresponding button click
  useEffect(() => {
    const handleKeyPress = (event) => {
      const buttonToPress = document.getElementById(event.key.toUpperCase());
      if (buttonToPress) {
        buttonToPress.click();
      }
    }; 
    document.addEventListener('keypress', handleKeyPress);
    // Clean-up function to prevent multiple event listeners after rerender
    return () => { document.removeEventListener('keypress', handleKeyPress); };
  }, []);
  
  return (
    <div id='drum-machine' className='d-flex flex-column align-items-center'>
      <h2 className='fs-3 w-100 text-end px-3'>Drum Pad</h2>
      <div id='display' className='mb-3 mt-3 p-3 text-center fs-6'>
        {displayText || 'Press a Key'}
      </div>
      <div className='container d-flex flex-column justify-content-center px-4'>
        <div className='row'>
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[0].key}
            url={keyAudioMap[0].url}
            label={keyAudioMap[0].description}
          />
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[1].key}
            url={keyAudioMap[1].url}
            label={keyAudioMap[1].description}
          />
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[2].key}
            url={keyAudioMap[2].url}
            label={keyAudioMap[2].description}
          />
        </div>
        <div className='row'>
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[3].key}
            url={keyAudioMap[3].url}
            label={keyAudioMap[3].description}
          />
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[4].key}
            url={keyAudioMap[4].url}
            label={keyAudioMap[4].description}
          />
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[5].key}
            url={keyAudioMap[5].url}
            label={keyAudioMap[5].description}
          />
        </div>
        <div className='row'>
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[6].key}
            url={keyAudioMap[6].url}
            label={keyAudioMap[6].description}
          />
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[7].key}
            url={keyAudioMap[7].url}
            label={keyAudioMap[7].description}
          />
          <SoundButton
            sendDataToParent={handleButtonClick}
            id={keyAudioMap[8].key}
            url={keyAudioMap[8].url}
            label={keyAudioMap[8].description}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
