import { useContext } from 'react';
import { Context as CounterContext } from 'contexts/countersContext';

const OkButton = () => {
  const { increaseOk } = useContext(CounterContext);

  return <button onClick={increaseOk}>Ok</button>;
};

export default OkButton;