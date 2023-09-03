import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState(true);

  const textFlag = btnColor ? 'blue' : 'red';
  const colorFlag = btnColor ? 'red' : 'blue';
  return (
    <div>
      <button style={{ backgroundColor: colorFlag }} onClick={() => setBtnColor(!btnColor)}>{`Change to ${textFlag}`}</button>
    </div>
  );
}

export default App;
