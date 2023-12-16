import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementNumber, decrementNumber } from './Action';

const store = createStore(reducer);

export default function Counter() {
  const [count, setCounter] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setCounter(store.getState().count));
    return unsubscribe;
  }, []);

  return (
    <div>
      <h3 style={{fontSize: '48px'}}>{count}</h3>
      <button onClick={() => store.dispatch(incrementNumber())}>Like</button>
      <button onClick={() => store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  );
}
