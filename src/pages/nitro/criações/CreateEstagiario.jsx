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
import imagenitro14 from '../../../assets/pci14.png'
import imagenitro15 from '../../../assets/pci15.png'
import imagenitro16 from '../../../assets/pci16.png'
import imagenitro17 from '../../../assets/pci17.png'
import imagenitro18 from '../../../assets/pci18.png'
import imagenitro19 from '../../../assets/pci19.png'
import imagenitro20 from '../../../assets/pci20.png'
import imagenitro21 from '../../../assets/pci21.png'
import imagenitro22 from '../../../assets/pci22.png'

const CreationContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    
    width: 100%;
    height: 1870vh;
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
    
    input {
      color: white;
      background-color: ${props => props.theme.palette.background.main};
      border: 1px solid ${props => props.theme.palette.border.primary};
      padding: .5rem;
      border-radius: .3rem;
    }
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
  height: 1850vh;
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

  p{
    font-size: 1.6rem;
  }

  .txt-menor {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2.3rem;
    margin: 2rem 0 1rem 0;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    li {
      font-size: 1.3rem;
    }
  }

  .img-container {
    margin: 1.5rem;
  }


  .img-container22 {
    margin: 1.5rem;
    width: 100rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .pdm {
    display: flex;
    flex-direction: row;
  }
  
  .email-body {
    background-color: white;
    width: 50%;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    p {
      color: black;
      font-size: 1.2rem;
    }
  }

  a {
    color: ${props => props.theme.palette.txt.select};
  }

  button {
    width: 15rem;
    height: 4rem;
    background-color: ${props => props.theme.palette.background.button};
    border: none;
    border-radius: .5rem;
    transition: all .2s;

    &:hover {
      background-color: ${props => props.theme.palette.background.buttonHover};
      color: white;
      border-radius: 0;
      width: 17rem;
    }
  }
`;

const CreateEstagiario = () => {
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
Colaborador - Estagiário

Nome Completo: ${formattedCollaboratorName}

Acesso ao Ambiente Nitro
User Nitro: est.${createUsername()}
Senha: ${nitroPassword()}

Acesso Email
User Login: est.${createUsername()}@nitroquimica.com.br
Nome caixa de e-mail: est.${createEmail()}
Senha: ${nitroPassword()}
Link de acesso Aplicativos Office: 

Plataforma de Chamados
Login Desk Manager: est.${createEmail()}
Senha: ${nitroPassword()}
Link de acesso Desk Manager: 

Primeiros Passos:


Atenciosamente, 
    `;
  
    const mailtoLink1 = `mailto:${email1}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
    window.location.href = `${mailtoLink1};&cc=${email2};${email3}`;
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
        <h2>Criação de Acessos (Estagiário)</h2>
        <h3>Procedimento</h3>
        <p><strong>1°</strong> Acesse um dos ADs NQSPV010 ou NQSPV011 </p>
        <p><strong>2°</strong> Abra o Active Directory Users and Computers: </p>
        <div className="img-container">
          <img src={imagenitro1} alt="nitroimg1" />
        </div>
        <p><strong>3°</strong> Selecione a pasta em que o usuário deve ser criado conforme a ESTABELECIMENTO descrito no chamado: </p>
        <br />
        <p><strong>Exemplo: nitroquimica.local/NITRO-SERTAOZINHO/USERS</strong></p>
        <div className="img-container">
          <img src={imagenitro2} alt="nitroimg2" />
        </div>
        <p><strong>4°</strong> Clique na opção “CRIAR USUÁRIO”:  </p>
        <div className="img-container">
          <img src={imagenitro3} alt="nitroimg3" />
        </div>
        <p><strong>5°</strong> Preencha o Formulário a seguir:   </p>
        <p>Nome do colaborador: {colaborador.nome} </p>
        <p>Usuário deve ser criado com o primeiro nome + iniciais do sobrenome: est.{createUsername()}</p>
        <br />
        <p className='txt-menor'><strong>NOTA: Para Logins homônimos (Ou seja, que possuem o mesmo nome), utilize a segunda letra do último sobrenome no final para diferenciá-los: ex: Paulo Henrique Messias = est.paulohme</strong></p>
        <div className="img-container">
          <img src={imagenitro4} alt="nitroimg4" />
        </div>
        
        <p><strong>Obs¹: Selecionar @nitroquimica.com.br como SMTP (exceto Obs³) </strong></p>
        <p><strong>Obs²: Não inserir número ou conjugação de nome (de, da, do, dos) no Login de rede.</strong></p>
        <p><strong>Obs³: Para Colaboradores da Unidade de Patos de Minas escolher @nbtsa.com.br como SMTP</strong></p>
        <br />
        <p>Insira a senha de acesso composta por 8 Caracteres, confirme e vá para a próxima tela.</p>
        <p>A opção marcada é para que o usuário altere a senha no primeiro login, deixe-a selecionada.</p>

        <div className="img-container">
          <img src={imagenitro5} alt="nitroimg5" />
        </div>

        <p><strong>6°</strong> Criado o usuário, edite as informações na guia Geral (General), edite descrição e Site conforme tela abaixo,  </p>
        <p>(você deve receber essas informações no formulário). </p>
        <p><strong>6.1</strong> - Display Name: sempre coloque Nome Sobrenome | Nitro Ex: Paulo Messias | Nitro</p>
        <p><strong>6.2</strong> - Descrição: Número de Matrícula Nitro (Inserir apenas se informado no chamado) </p>
        <p><strong>6.3</strong> - Office:  Inserir o Escritório conforme Estabelecimento mencionado no Chamado</p>

        <div className="img-container">
          <img src={imagenitro6} alt="nitroimg6" />
        </div>

        <p><strong>E-mail sendo este o padrão para inclusão: nome.sobrenome@nitro.com.br (Exceto Patos de Minas est.nome.sobrenome@nbtsa.com.br)</strong></p>
        <br />
        <p><strong>7º – Inserir Informações no Campo Organização / Organization </strong></p>
        <br />
        <div>
          <p><strong>Job Title / Cargo:</strong> Inserir a Informação informada no campo “cargo” no chamado. </p>
          <p><strong>Departament / Departamento:</strong> Inserir a Informação informada no campo “Área/ 
          Departamento” no chamado. </p>
          <p><strong>Company / Companhia:</strong> Nitro</p>
          <p><strong>Manager / Gerente:</strong> Inserir a Informação informada no campo “Gestor” no chamado.</p>
        </div>
        <div className="img-container">
          <img src={imagenitro7} alt="nitroimg7" />
        </div>

        <p><strong>8º</strong>Na guia <strong>Perfil(Profile)</strong> edite a informação de <strong>"Script de Logon"</strong></p>
        <br />
        <p>Esse Script Logon , nós criaremos a seguir, ele vai mapear as pastas de rede do usuário,</p>
        <p>e aplicar o papel de parede sempre que ele logar em algum computador na rede.</p>
        <br />
        <p><strong>Importante “Nunca adicione essa informação no Caminho do perfil (Profile path)”</strong></p>
        <p>Isso fará com que o usuário sempre utilize perfis temporários na estação de trabalho.</p>

        <p>O logon de script é o <strong>nome de usuário.bat (Igual ao nome de Login sem o SMTP)</strong></p>

        <div className="img-container">
          <img src={imagenitro8} alt="nitroimg8" />
        </div>

        <p><strong>9º</strong>Agora vamos criar o Script de login:</p>
        <p>Dentro do servidor acesse o caminho a seguir: </p>
        <p><strong>C:\Windows\SYSVOL\sysvol\nitroquimica.local\scripts</strong></p>

        <div className="img-container">
          <img src={imagenitro9} alt="nitroimg9" />
        </div>

        <p><strong>A forma mais fácil de criar o Script é copiar um existente e editar os dados:</strong></p>

        <p>Edite o nome do script que você acabou de copiar, coloque o nome do <strong>usuário que você criou.</strong></p>

        <div className="img-container">
          <img src={imagenitro10} alt="nitroimg10" />
        </div>

        <p><strong>10º</strong>Agora clique com o botão direito no script e mande editar:</p>
        <br />
        <p><strong>Abaixo tem o padrão que você deve usar para os novos usuários (se houver usuário espelho, será necessário espelhar os mapeamentos). </strong></p>
        <br />
        <div className="script">
          <p>@ECHO OFF </p>
          <p>NET TIME \\NQNTFS /SET /YES</p>
          <p>NET USE Y: \\NQNTFS\PUBLICA /YES </p>
          <p>call \\nqntfs\publica\ems\ems.bat</p>
        </div>
        <br />
        <p><strong>11º</strong>Na aba <strong>Member Of</strong> devemos adicionar os usuários criados em grupos de e-mail conforme regras abaixo.</p>
        <br />
        <ul>
          <li><strong>Todos: </strong>todos os usuários, independente do tipo de contratação, devem ser incluídos no grupo Todos (NitroQuimica).</li>
          <li><strong>Funcionários efetivos, trainees, estagiário e menores aprendizes: </strong>além do grupo Todos (NitroQuimica), incluir também no grupo <strong>Todos (Funcionários).</strong></li>
        </ul>
        <br />
        <p>Clique no botão <strong>Add</strong>... da aba Member Of e procure os grupos. Adicione-os à lista e, em seguida, clique em OK para salvar as alterações.</p>

        <div className="img-container">
          <img src={imagenitro11} alt="nitroimg11" />
        </div>

        <p><strong>Finalizada a criação do usuário de rede será necessário criar o e-mail do usuário.</strong></p>
        <br />
        <h3><strong>Criação de E-mail</strong></h3>
        <p>Acesse o <strong>Exchange Management Console</strong> Console através do servidor 10.55.0.87 conforme imagem abaixo.</p>

        <div className="img-container">
          <img src={imagenitro12} alt="nitroimg12" />
        </div>

        <p>No menu lateral esquerdo da ferramenta, desça alguns níveis até encontrar a opção <strong>Mailbox</strong>.</p> 
        <p>Clique com o botão direito do mouse em <strong>Mailbox</strong> e, em seguida, clique em <strong>New Mailbox</strong>... conforme imagem abaixo.</p>

        <div className="img-container">
          <img src={imagenitro13} alt="nitroimg13" />
        </div>

        <p>Na janela que abrir, marque a opção <strong>User Mailbox</strong> e clique em "Next".</p>
        
        <div className="img-container">
          <img src={imagenitro14} alt="nitroimg13" />
        </div>

        <p>Em seguida, marque a opção <strong>Existing users</strong>: e clique em <strong>Add</strong>.... Abrirá uma nova janela, pesquise pelo nome do colaborador e selecione-o na lista.</p> <p>Em seguida, clique em OK para salvar e fechar a janela atual. Voltando à janela anterior, o nome do colaborador aparecerá na lista.</p>
        <p>Clique em "Next" para prosseguir.</p>
        
        <div className="img-container">
          <img src={imagenitro15} alt="nitroimg13" />
        </div>

        <p>Na próxima tela, será preciso informar o <strong>Alias</strong> e especificar a base de dados na qual o usuário será inserido.</p> 
        <p>O Alias e a base de dados devem seguir o padrão informado abaixo de acordo com o tipo de usuário</p>

        <p>O campo <strong>Alias</strong> deve ser preenchido com todas as letras minúsculas conforme exemplo e regras abaixo.</p>
        <br />
        <p><strong>Funcionário Efetivo (Estagiário)</strong></p>
        <p>- Nome Completo: {colaborador.nome}</p>
        <p>- E-mail: {createEmail()}</p>
        <p>No caso de duplicidade, utilizar outro sobrenome do colaborador</p>
        <br />
        <p><strong>Obs¹.: Nunca autilizar número em Login de rede e E-mail </strong></p>
        <p><strong>Obs².: Para e-mail duplicado, utilize o segundo nome ao invés do último sobrenome no Alias.</strong></p>
        <p><strong>Obs³: Para Colaboradores da Unidade de Patos de Minas após a criação do E-mail, devemos alterar o SMTP para @nbtsa.com.br manualmente.</strong></p>
        <br />
        <p>Após preencher o alias, habilite a opção <strong>Specify the mailbox database</strong>, clique em <strong>Browse</strong>...</p>
        <p>e selecione a base de dados correspondente ao tipo de usuário conforme informações abaixo.</p>
        <br />
        <ul>
          <li><strong>Nitro_100MB:</strong>estagiários, menores aprendizes, terceiros/externos e funcionários das áreas de produção/manutenção.</li>
          <li><strong>Nitro_200MB:</strong>trainees e funcionários das áreas de administração/escritórios.</li>
          <li><strong>Nitro_300MB:</strong>gestores, coordenadores, supervisores e líderes de equipes.</li>
          <li><strong>Nitro_400MB:</strong>funcionários do T.I., gerentes e diretores.</li>
          <li><strong>Nitro_4GB:</strong>esta base deve ser usada somente com solicitação do Eric Tomboly ou Roberto Jesus.</li>
        </ul>
        <br />
        <p>Após selecionar a base de dados, clique em <strong>OK</strong> para voltar à janela principal. Na janela principal, clique em Next.</p>

        <div className="img-container">
          <img src={imagenitro16} alt="nitroimg13" />
        </div>

        <p>Para finalizar, confira o alias e a base de dados. Se estiver tudo certo, clique em <strong>"New"</strong>.</p>
        
        <div className="img-container">
          <img src={imagenitro17} alt="nitroimg13" />
        </div>

        <p>Aguarde o processo ser concluído e clique em <strong>Finish</strong> para encerrar o assistente de criação de e-mail.</p>

        <h3><strong>Alteração de SMTP (Apenas usuários Patos de Minas)</strong></h3>

        <p>Todos e-mails criados no Exchange vêm com o SMTP <strong>@nitro.com.br</strong> configurado por padrão,</p> 
        <p>então para os funcionários da unidade <strong>Nitro - Patos de Minas</strong> devemos realizar a alteração através do procedimento abaixo.</p>

        <p>Finalizada a criação do E-mail, devemos procurar o novo usuário e com o segundo botão do mouse devemos ir em "Propriedades".</p>
        
        <div className="img-container1">
          <img src={imagenitro18} alt="nitroimg13" />
        </div>

        <p>Na nova janela clique em "E-mail Addresses".</p>
        
        <div className="img-container">
          <img src={imagenitro19} alt="nitroimg13" />
        </div>

        <p>Depois com o segundo botão do mouse vá na opção "Edit" e realize a alteração do SMTP de <strong> @nitro.com.br</strong> para <strong>@nbtsa.com.br</strong></p>


        <div className="pdm">
          <div className="img-container">
            <img src={imagenitro20} alt="nitroimg13" />
          </div>
          <div className="img-container">
            <img src={imagenitro21} alt="nitroimg13" />
          </div>
        </div>


        <p>Feito isso podemos dar <strong>OK</strong> e fechar as janelas.</p>
        <p>Agora é necessário validar se o e-mail foi replicado no Active Directory,</p> 
        <p>então volte na ferramenta e confirme se a informação foi replicada, caso o E-mail não atualize, devemos digitá-lo manualmente:</p>

        
        <div className="img-container22">
          <img src={imagenitro22} alt="nitroimg22" />
        </div>

        <h3>Envio dos dados de acesso</h3>
        <p>Após finalizarmos todo o processo de criação, devemos encaminhar um e-mail contendo os dados de acesso do novo usuário para:</p>
        <br />
        <ul>
          <li><strong>Gestor do colaborador</strong></li>
          <li><strong>contas_novas@nitro.com.br</strong></li>
          <li><strong>anderson.silva@computecnica.com.br</strong></li>
        </ul>
        <br />
        <p className="email-txt"></p>
        <div className="email-body">
          <p><strong>Assunto: Criação de Acessos Nitro {colaborador.nome}</strong></p>
          <p><strong>Destinatário: Contas_novas@nitro.com.br e ao email do gestor imediato</strong></p>
          <br />
          <p>Prezados,</p>
          <br />
          <p>Acesso criado conforme solicitação {colaborador.chamado} - Nitro - TI - Acessos - Novo Colaborador - Estagiário</p>
          <br />
          <p><strong>Nome Completo:</strong> {colaborador.nome}</p>
          <br />
          <p><strong>Acesso ao Ambiente Nitro</strong></p>
          <p>User Nitro: {createUsername()}</p>
          <p>Senha: {nitroPassword()}</p>
          <br />
          <p><strong>Acesso Email</strong></p>
          <p>user Login: {createUsername()}@nitroquimica.com.br</p>
          <p>Nome caixa de e-mail: {createEmail()}@nitro.com.br</p>
          <p>Senha: {nitroPassword()}</p>
          <p>Link de acesso Aplicativos Office: <a href="https://www.office.com/">https://www.office.com/</a></p>
          <br />
          <p><strong>Plataforma de Chamados</strong></p>
          <p>Login Desk Manager: {createEmail()}@nitro.com.br</p>
          <p>Senha: {nitroPassword()}</p>
          <p>Link de Acesso Desk Manager: <a href="https://computecnica.desk.ms/?LoginPortal">https://computecnica.desk.ms/?LoginPortal</a></p>
          <br />
          <p><strong>Primeiros Passos:</strong></p>
          <br />
          <p><a href="https://drive.google.com/file/d/17Ue5kDJm49C1Ci57l4gUddwOBrl5lnG9/view">Vídeo Tutorial - Acessando sua conta no Microsoft 365</a></p>
          <br />
          <p><a href="https://drive.google.com/file/d/10sWBde2Q5mqxMbL4iH5iWSMB3JsJpsZG/view">Vídeo Tutorial - Como abrir um Chamado</a></p>
          <br />
          <p>Atenciosamente,</p>
        </div>

        <button onClick={handleEnviarClick}>Enviar</button>
      </ProcedureContainer>
    </CreationContainer>
  );
};

export default CreateEstagiario;
