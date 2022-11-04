import React, { useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [username, setUserName] = useState('')
  return (
    <div className="app">
      <h1>
        <Child />
      </h1>

    </div>
  );
}

export default App;
