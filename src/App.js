import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import SignIn from './components/SignIn/SignIn';
import './index.scss';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if(isLogged){
      setTimeout(() => {window.location = '/home'}, 1000)
    }
  })

  return (
    <div className="App">
      {
        !isLogged 
        ? <SignIn isLogged={isLogged} setIsLogged={setIsLogged} />
        : <Loader />
      }
    </div>
  );
}

export default App;
