import './Login.css';

import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UseContext';
const Login = () => {
  const { log, user } = useContext(UserContext);
  const textInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/Home');
  }, [user]);

  return (
    <div className="containerLogin">
      {!localStorage.getItem('user') && (
        <>
          <h2>Por favor introduzca su nombre para poder ver el contenido de la página</h2>
          <input type="text" ref={textInput} />
          {/* login(textInput.current.value) */}
          <button className="loginButton" onClick={() => log(textInput.current.value)}>
            {' '}
            Registrar
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
