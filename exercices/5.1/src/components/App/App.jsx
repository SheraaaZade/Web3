import { useContext } from 'react'
import React from 'react';
import GoodButton from '../Button/GoodButton';
import OkButton from '../Button/OkButton';
import BadButton from '../Button/BadButton';
import ResetButton from '../Button/ResetButton';
import { Context as CounterContext } from 'contexts/countersContext';


function App() {
  const { good, ok, bad, resetAll } = useContext(CounterContext);

  return (
    <div>
      <h1>Votez votre satisfaction: </h1>
      <div>
        <GoodButton />
        <OkButton />
        <BadButton />
      </div>
      <div>
        <p>Good: {good}</p>
        <p>Ok: {ok}</p>
        <p>Bad: {bad}</p>
      </div>
      <ResetButton resetAll={resetAll} />
    </div>
  )
}

export default App
