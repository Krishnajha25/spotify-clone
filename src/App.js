import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi()

function App() {

  // const [token, setToken] = useState(null) //Used to handle variables in React. Initially we need to make it null. Volatile memory
  const [{user, token}, dispatch] = useDataLayerValue();

  // Runs the code based on condition. We can have multiple useEffects
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""   //This is gonna remove the hash token from the URL. Security is IMP 
    const _token = hash.access_token;

    if(_token){
      // setToken(_token)

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      
      spotify.setAccessToken(_token)
      
      spotify.getMe()
      .then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
    
    // console.log('🙍', user);
    // console.log('🙍', token);
  }, [])
  // Keep the bracket empty if we want to run the useeffect only once,
  // Or we can mention the variable name based on which it will run everytime the variable value changes

  return (
    <div className="App">
        {
          //Ternary operator to check if we have a token, if not then redirect to login page 
          token ? (
            <Player spotify={spotify} />
          ) : (
            <Login />
           )
        }
        {/* <Login /> */}
    </div>
  );
}

export default App;
