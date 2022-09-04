import { useState } from 'react';
import loginIMG from './assets/Subtract.png';
import './styles.css';

export const App = () => {
  const [email, setEmail] = useState(0)
  const [password, setpassword] = useState(0)

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
              
              <span className="login-title">
                <img src={ loginIMG } alt="Login" />
              </span>
            
            <span className="text-green1">CADASTRE-SE </span>
            <span className='login-title'>OU FAÇA LOGIN</span>
            <div className="wrap-input">
              <input 
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder='EMAIL OU NOME DE USUÁRIO' ></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setpassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="INSIRA SUA SENHA"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">ENTRAR</button>
            </div>

            <div className="text-center">
              <a className="txt2" href="#">OU CRIE SUA CONTA</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}