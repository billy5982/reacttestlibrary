import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState(true);
  const [check, setCheck] = useState(false);

  const textFlag = btnColor ? 'blue' : 'red';
  const colorFlag = btnColor ? 'red' : 'blue';

  return (
    <div>
      <button style={{ backgroundColor: colorFlag }} onClick={() => setBtnColor(!btnColor)} disabled={check}>{`Change to ${textFlag}`}</button>
      <input type='checkbox' defaultChecked={check} onClick={(e) => setCheck(e.target.checked)} />
    </div>
  );
}

export default App;
