import logo from './logo.svg';
import './App.css';

import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './actions'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.logged)

  const fetchApi = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res);
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h3>Is Logged?: {isLogged ? 'Logged In' : 'Logged Out'}</h3>
    </div>
  );
}

export default App;
