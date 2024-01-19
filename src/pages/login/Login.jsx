import React, { useState } from 'react';
import { authenticateUser } from '../../components/auth/AuthProvider';
import styled from '@emotion/styled';

const LoginContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    ;
    width: 100%;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-page {
      background-color: ${props => props.theme.palette.background.card};   
      border: 1px solid ${props => props.theme.palette.border.secondary};   
      border-radius: 1rem;
      height: 20rem;
      width: 40rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      h2 {
        color: ${props => props.theme.palette.txt.white};  
        font-size: 2rem; 
        margin-bottom: 1rem;
      }

      input {
        background-color: ${props => props.theme.palette.background.main};
        border: none;
        height: 2.5rem;
        padding: 0.5rem;
        color: ${props => props.theme.palette.txt.main};
      }

      button {
        margin-top: 1rem;
        width: 7rem;
        height: 3.5rem;
        border-radius: .7rem;
        color: ${props => props.theme.palette.txt.white};
        background-color: ${props => props.theme.palette.background.button};
        border: 1px solid ${props => props.theme.palette.border.secondary};
        transition: all .3s;

        &:hover {
          width: 9rem;
          height: 3.5rem;
          background-color: ${props => props.theme.palette.background.buttonHover};
          border: 1px solid ${props => props.theme.palette.border.primary};
        }
      }
    }
`;

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    const { username, password } = loginData;

    const authenticatedUser = authenticateUser(username, password);

    if (authenticatedUser) {
      localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));
      onLogin();
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };


  return (

    <LoginContainer>
      <div className="login-page">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </LoginContainer>
  );
};

export default Login;
