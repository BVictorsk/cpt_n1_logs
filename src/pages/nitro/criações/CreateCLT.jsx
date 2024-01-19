import React, { useState } from 'react';
import styled from '@emotion/styled';
import imagenitro1 from '../../../assets/pci1.png'
import imagenitro2 from '../../../assets/pci2.png'
import imagenitro3 from '../../../assets/pci3.png'
import imagenitro4 from '../../../assets/pci4.png'
import imagenitro5 from '../../../assets/pci5.png'
import imagenitro6 from '../../../assets/pci6.png'
import imagenitro7 from '../../../assets/pci7.png'
import imagenitro8 from '../../../assets/pci8.png'
import imagenitro9 from '../../../assets/pci9.png'
import imagenitro10 from '../../../assets/pci10.png'
import imagenitro11 from '../../../assets/pci11.png'
import imagenitro12 from '../../../assets/pci12.png'
import imagenitro13 from '../../../assets/pci13.png'

const CreationContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    
    width: 100%;
    height: 1000vh;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;
`;

const FormContainer = styled.div`
    height: 5rem;
    width: 70%;
    margin-top: 2rem;
    background-color: ${props => props.theme.palette.background.card};
    border: 1px solid ${props => props.theme.palette.border.secondary};
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 7rem;
    position: fixed;
`;

const FormWrap = styled.div`
    height: 4.5rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.palette.background.card};
    color: ${props => props.theme.palette.txt.white};
    gap: 1rem;
    border-radius: 1rem;
`;

const ProcedureContainer = styled.div`
  height: 900vh;
  width: 80%;
  margin-top: 2rem;
  background-color: ${props => props.theme.palette.background.card};
  border: 1px solid ${props => props.theme.palette.border.secondary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.palette.txt.white};
  margin-left: 7rem;
  margin-top: 9rem;

  .img-container1 {

  }

  .img-container2 {

  }

  .img-container3 {

  }

  .img-container4 {

  }

  .img-container5 {

  }

  .img-container6 {

  }

  .img-container7 {

  }

  .img-container8 {

  }

  .img-container9 {

  }

  .img-container10 {

  }

  .img-container11 {

  }

  .img-container12 {

  }

  .img-container13 {

  }

  .img-container14 {

  }

  .img-container15 {

  }
`;

const CreateCLT = () => {
  const [colaborador, setColaborador] = useState({
    nome: '',
    gestor: '',
    chamado: '',
  });

  const formatName = (fullName) => {
    const formattedName = fullName.toLowerCase().replace(/\b(da |de |do )\b/g, '').trim();
    return formattedName;
  };  

  const createUsername = () => {
    const formattedName = formatName(colaborador.nome);
    const nameParts = formattedName.split(' ');

    let username = nameParts[0];

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

    const firstName = nameParts[0];
    const lastSurname = nameParts[nameParts.length - 1];

    return `${firstName}.${lastSurname.toLowerCase()}@nitro.com.br`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador(prevState => ({ ...prevState, [name]: value }));
  };

  const nitroPassword = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  
    return `Nitro@${day}${month}`;
  };

  // Function to convert the name input to uppercase
  const convertToUpperCase = (name) => {
    return name
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const handleEnviarClick = () => {
    const email1 = 'contas_novas@nitro.com.br';
    const email2 = `${formatName(colaborador.gestor)}`;
    const email3 = 'anderson.silva@computecnica.com.br';
  
    const formattedCollaboratorName = convertToUpperCase(colaborador.nome);
  
    const emailSubject = `Criação de Acessos Nitro: ${formattedCollaboratorName}`;
    const emailBody = `
Prezados,

Acesso criado conforme solicitação ${colaborador.chamado} - Nitro - TI - Acessos - Novo 
Colaborador - CLT

Nome Completo: ${formattedCollaboratorName}

Acesso ao Ambiente Nitro
User Nitro: ${createUsername()}
Senha: ${nitroPassword()}

Acesso Email
User Login: ${createUsername()}@nitroquimica.com.br
Nome caixa de e-mail: ${createEmail()}
Senha: ${nitroPassword()}
Link de acesso Aplicativos Office: 

Plataforma de Chamados
Login Desk Manager: ${createEmail()}
Senha: ${nitroPassword()}
Link de acesso Desk Manager: 

Primeiros Passos:


Atenciosamente, 
    `;
  
    const mailtoLink1 = `mailto:${email1}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
    window.location.href = `${mailtoLink1}&cc=${email2},${email3}`;
  };

  return (
    <CreationContainer>
      <FormContainer>
        <FormWrap>
            <label htmlFor="nome">Nome do colaborador:</label>
            <input type="text" id="nome" name="nome" onChange={handleChange} />
        </FormWrap>
        <FormWrap>
            <label htmlFor="gestor">Email do gestor:</label>
            <input type="text" id="gestor" name="gestor" onChange={handleChange} />
        </FormWrap>
        <FormWrap>
            <label htmlFor="chamado">Numero do chamado:</label>
            <input type="text" id="chamado" name="chamado" onChange={handleChange} />
        </FormWrap>
      </FormContainer>
      <ProcedureContainer>
        {/* <p>Nome formatado: {formatName(colaborador.nome)}</p>
        <p>Nome de usuário: {createUsername()}</p>
        <p>Nome de email: {createEmail()}</p>
        <p>Senha: {nitroPassword()}</p> */}
        <h2>Criação de Acessos (CLT)</h2>
        <h3>Procedimento</h3>
        <p><strong>1°</strong> Acesse um dos ADs NQSPV010 ou NQSPV011 </p>
        <p><strong>2°</strong> Abra o Active Directory Users and Computers: </p>
        <div className="img-container1">
          <img src={imagenitro1} alt="nitroimg1" />
        </div>
        <p><strong>3°</strong> Selecione a pasta em que o usuário deve ser criado conforme a ESTABELECIMENTO descrito no chamado: </p>
        <p><strong>Exemplo: nitroquimica.local/NITRO-SERTAOZINHO/USERS</strong></p>
        <div className="img-container2">
          <img src={imagenitro2} alt="nitroimg2" />
        </div>
        <p><strong>4°</strong> Clique na opção “CRIAR USUÁRIO”:  </p>
        <div className="img-container3">
          <img src={imagenitro3} alt="nitroimg3" />
        </div>
        <p><strong>5°</strong> Preencha o Formulário a seguir:   </p>
        <p>Nome do colaborador: {colaborador.nome} </p>
        <p>Usuário deve ser criado com o primeiro nome + iniciais do sobrenome: {createUsername()}</p>
        <p><strong>NOTA: Para Logins homônimos (Ou seja, que possuem o mesmo nome), utilize a segunda letra do último sobrenome no final para diferenciá-los: ex: Paulo Henrique Messias = paulohme</strong></p>
        <div className="img-container4">
          <img src={imagenitro4} alt="nitroimg4" />
        </div>
        
        <p>parei nas obs</p>

        <div className="img-container5">
          <img src={imagenitro5} alt="nitroimg5" />
        </div>
        <div className="img-container6">
          <img src={imagenitro6} alt="nitroimg6" />
        </div>
        <div className="img-container7">
          <img src={imagenitro7} alt="nitroimg7" />
        </div>
        <div className="img-container8">
          <img src={imagenitro8} alt="nitroimg8" />
        </div>
        <div className="img-container9">
          <img src={imagenitro9} alt="nitroimg9" />
        </div>
        <div className="img-container10">
          <img src={imagenitro10} alt="nitroimg10" />
        </div>
        <div className="img-container11">
          <img src={imagenitro11} alt="nitroimg11" />
        </div>
        <div className="img-container12">
          <img src={imagenitro12} alt="nitroimg12" />
        </div>
        <div className="img-container13">
          <img src={imagenitro13} alt="nitroimg13" />
        </div>


      </ProcedureContainer>
      <button onClick={handleEnviarClick}>enviar</button>
    </CreationContainer>
  );
};

export default CreateCLT;
