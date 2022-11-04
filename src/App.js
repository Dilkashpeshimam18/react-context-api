import React, { useState } from 'react';
import './App.css';
import Child from './components/Child';
import AppContext from './context/context';
function App() {
  const [username, setUserName] = useState('')
  return (
    <AppContext.Provider value={{ username: username, setUserName: setUserName }}>
      <div className="app">
        {username == '' ? <h2>Enter a value</h2> :
          <h1>
            {username}
          </h1>
        }
        <Child />



      </div>
    </AppContext.Provider>

  );
}

export default App;
