import React from 'react';
import './SignIn.scss';

function SignIn({isLogged, setIsLogged}) {
  return (
    <div className="sign-in" onClick={() => setIsLogged(!isLogged)}>
        <span>Iniciar sesión</span>
    </div>
  )
}

export default SignIn;