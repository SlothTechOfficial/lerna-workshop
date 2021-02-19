import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChuckNorris } from '@lerna-workshop/services';
import { languages } from '@lerna-workshop/core';
import { Logo, Blockquote, Controls, Translate } from './components';

function App() {

  const [isLoadingJoke, setLoadingJoke] = useState(false);
  const [joke, setJoke] = useState('Empty joke');

  const nextJoke = () => {
    setLoadingJoke(true);
     ChuckNorris.Joke().then(reply => {
      setJoke(reply.value);
      setLoadingJoke(false);
     });
  }

  const onEndTranslate = (result) => {
    setJoke(result);
  }

  return (
    <div className="App">
        <Logo />
        <Blockquote message={ joke } />
        {
          !isLoadingJoke &&
            <Controls 
              onPressNext={nextJoke}
            />
        }
        <br />
        <br />
        Language <Translate onEndTranslate={onEndTranslate} Languages={languages} message={ joke } />
        
    </div>
  );
}

export default App;
