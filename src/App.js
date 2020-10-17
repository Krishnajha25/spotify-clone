import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null) //Used to handle variables in React. Initially we need to make it null. Volatile memory

  // Runs the code based on condition. We can have multiple useEffects
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""   //This is gonna remove the hash token from the URL. Security is IMP 

    const _token = hash.access_token;

    if(_token){
      setToken(_token)
    }

  }, [])
  // Keep the bracket empty if we want to run the useeffect only once,
  // Or we can mention the variable name based on which it will run everytime the variable value changes

  return (
    <div className="App">
        {
          //Ternary operator to check if we have a token, if not then redirect to login page 
          token ? (
            // <Player />
            <h2>I'm Logged In 🔥  </h2>
          ) : (
            <Login />
           )
        }
        {/* <Login /> */}
    </div>
  );
}

export default App;
