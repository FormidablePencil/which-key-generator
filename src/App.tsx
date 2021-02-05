import './App.css';

import React, { useState } from 'react';

function App() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  return (
    <div>
      <input type='text' placeholder='cmd' value={value1} onChange={(e) => setValue1(e.target.value)} />
      <input type='text' placeholder='description' value={value2} onChange={(e) => setValue2(e.target.value)} />

      <div>\  '{value1}' : ['','{value2}'],</div>
    </div>
  );
}

export default App;
