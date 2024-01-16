import React, { useState } from 'react';
import { authenticateUser } from '../../components/auth/AuthProvider';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    const { username, password } = loginData;

    if (authenticateUser(username, password)) {
      localStorage.setItem('authenticatedUser', JSON.stringify({ login: username }));
      onLogin(); // Chama a função de callback passada por props para indicar que o usuário está autenticado
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
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
  );
};

export default Login;
