import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  
  return (
    <>
<input type='text' value={value1} onChange={(e) => setValue1(e.target.value)} />
<input type='text' value={value2} onChange={(e) => setValue2(e.target.value)} />

  <div>/  '{value1}', ['','{value2}'],</div>
   </>
  );
}

export default App;
