import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ThemeSelect from './pages/tema/ThemeSelect';
import React, { useState, useEffect } from 'react';
import './App.css'

import { ThemeProvider, nightTheme, auroraTheme, deepTheme, urbanTheme } from './components/theme/theme';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'
import Cpt from "./pages/cpt/Cpt";
import Nitro from "./pages/nitro/Nitro";
import Oji from "./pages/oji/Oji";
import Contato from "./pages/contato/Contato";
import Login from "./pages/login/Login";


function App() {
  // login
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Verifica se há informações de autenticação armazenadas no localStorage
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    return authenticatedUser ? true : false;
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // temas
  const [selectedTheme, setSelectedTheme] = useState(() => {
    // Tenta obter o tema do localStorage
    const storedTheme = localStorage.getItem('selectedTheme');
    // Se existir, retorna o tema armazenado, senão retorna o tema padrão (nightTheme)
    return storedTheme ? JSON.parse(storedTheme) : nightTheme;
  });
  
  const [themeChanged, setThemeChanged] = useState(false);

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
    setThemeChanged(true);
  };  

  
  // Efeito para salvar o tema no localStorage sempre que o tema é alterado
  useEffect(() => {
    localStorage.setItem('selectedTheme', JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  
  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Router class="app">
          {isAuthenticated ? (
            <div className="app-container">
              <Sidebar themeChanged={themeChanged} setThemeChanged={setThemeChanged}/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="theme-change" element={<ThemeSelect changeTheme={changeTheme} />} />
                <Route path="/Cpt" element={<Cpt />} />
                <Route path="/Nitro" element={<Nitro />} />
                <Route path="/Oji" element={<Oji />} />
                <Route path="/Contato" element={<Contato />} />
              </Routes>
            </div>
          ) : (
            // Se não estiver autenticado, redireciona para a página de login
            <Routes>
              <Route
                path="/"
                element={<Login onLogin={handleLogin} />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
