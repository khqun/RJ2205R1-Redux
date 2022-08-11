import showMessage from './redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { store } from './redux/store';
function App() {
  const message = useSelector(state => state);
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [mes, setMes] = useState('');
  const renderMessage = () => {
    return (
      <h1>{message.message}</h1>
    )
  }
  const handleChange = (e) => {
    setMes(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(showMessage(mes))
    store.subscribe(() => {
      console.log("current state", store.getState());
    });
  }
  return (
    <div>
      <button onClick={() => { setIsClick(!isClick) }}>
        Show Message
      </button>
      <div>
        <input value={mes || ''} onChange={handleChange} />
      </div>
      <div>
        {isClick ? renderMessage() : ''}
      </div>
      <button onClick={() => handleSubmit()}>
        submit
      </button>
    </div>
  )
}

export default App;
