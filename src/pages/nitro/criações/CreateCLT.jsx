import React, { useState } from 'react';
import styled from '@emotion/styled';

const CreationContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};
    border: 1px solid ${props => props.theme.palette.border.secondary};   
`;

const ProcedureContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};
    border: 1px solid ${props => props.theme.palette.border.secondary};   
`;

const CreateCLT = () => {
  const [colaborador, setColaborador] = useState({
    nome: '',
    gestor: '',
    chamado: '',
  });

  const formatName = (fullName) => {
    const formattedName = fullName.toLowerCase().replace(/\b(da|de|do)\b/g, '').trim();
    return formattedName;
  };  

  const createUsername = () => {
    const formattedName = formatName(colaborador.nome);
    const nameParts = formattedName.split(' ');
    
    // Manter o primeiro nome
    let username = nameParts[0];
    
    // Pegar a primeira letra de cada sobrenome (a partir do segundo nome)
    for (let i = 1; i < nameParts.length; i++) {
      if (nameParts[i].length > 0) {
        username += nameParts[i][0];
      }
    }
  
    return username.toLowerCase();
  };

  const createEmail = () => {
    const formattedName = formatName(colaborador.nome);
    const nameParts = formattedName.split(' ');
  
    // O primeiro nome é o primeiro elemento no array
    const firstName = nameParts[0];
  
    // O último sobrenome é o último elemento no array
    const lastSurname = nameParts[nameParts.length - 1];
  
    // Lógica para criar o endereço de e-mail, por exemplo, pode ser o primeiro nome seguido pelo último sobrenome e um domínio
    return `${firstName}.${lastSurname.toLowerCase()}@nitro.com.br`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador(prevState => ({ ...prevState, [name]: value }));
  };

  //senha
  const nitroPassword = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  
    return `Nitro@${day}${month}`;
  };

  const handleEnviarClick = () => {
    const email1 = 'email1@outlook.com';
    const email2 = 'email2@outlook.com';
    const email3 = 'email3@outlook.com'; // Novo e-mail adicionado
  
    const emailSubject = 'Informações do Colaborador';
    const emailBody = `
      Nome formatado: ${formatName(colaborador.nome)}
      Nome de usuário: ${createUsername()}
      Nome de email: ${createEmail()}
      Senha: ${nitroPassword()}
    `;
  
    // Monta os links para os e-mails
    const mailtoLink1 = `mailto:${email1}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const mailtoLink2 = `mailto:${email2}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const mailtoLink3 = `mailto:${email3}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
    // Abre os clientes de e-mail padrão com as informações preenchidas
    window.location.href = `${mailtoLink1}&cc=${email2},${email3}`;
  };

  return (
    <CreationContainer>
      <FormContainer>
        <label htmlFor="nome">Nome do colaborador:</label>
        <input type="text" id="nome" name="nome" onChange={handleChange} />
        <label htmlFor="gestor">Nome do gestor:</label>
        <input type="text" id="gestor" name="gestor" onChange={handleChange} />
        <label htmlFor="chamado">Numero do chamado:</label>
        <input type="text" id="chamado" name="chamado" onChange={handleChange} />
      </FormContainer>
      <ProcedureContainer>
        <p>Nome formatado: {formatName(colaborador.nome)}</p>
        <p>Nome de usuário: {createUsername()}</p>
        <p>Nome de email: {createEmail()}</p>
        <p>Senha: {nitroPassword()}</p>
      </ProcedureContainer>
      <button onClick={handleEnviarClick}>enviar</button>
    </CreationContainer>
  );
};

export default CreateCLT;
