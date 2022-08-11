import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';
import './App.css';
import React from 'react';
function App() {
  const counter = useSelector(state => state);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* <button onClick={() => dispatch(signIn())}>Show Message</button> */}
    </div>
  )
}

export default App;
