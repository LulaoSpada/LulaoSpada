import { useState } from 'react';
import loginIMG from './assets/Login.png';
import './styles.css';

export const App = () => {
  const [email, setEmail] = useState(0)
  const [password, setpassword] = useState(0)

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-title">Bem Vindo!</span>

            <span className="login-title">
              <img src={ loginIMG } alt="Login" />
            </span>

            <div className="wrap-input">
              <input 
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setpassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="#">Criar conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}