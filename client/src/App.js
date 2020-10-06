import React, { useEffect, useState } from 'react';
import { getMessage } from './actions/users';
import './App.css';

const App = () => {
  const fetchData = async () => {
    const message = await getMessage();
    setMessage(message);
  }

  const [message, setMessage] = useState("knowrishment");
  
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { message }
        </p>
      </header>
    </div>
  );
}

export default App;
