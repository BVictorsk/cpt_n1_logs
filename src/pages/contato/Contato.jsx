import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CopyButton from '../../components/copy/CopyButton';
import { getAuthenticatedUser } from '../../components/auth/AuthProvider';

const ContatoContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};  
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const WrapContainer = styled.div`
  width: 90rem;
  height: 80vh;

  ul.tabs {
    width: 100%;
    height: 4rem;;
    margin: 0 auto;
    list-style: none;
    overflow: hidden;
    padding: 0;    
  }

  ul.tabs li {	
  float: left;
  display: flex
  flex-direction: row;
  justify-content: center;
  width: 30rem;
  align-items: center;
  }

  ul.tabs li a {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 30px;
  margin-top: 10px;
  padding: 10px 0 0 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 2.5rem;
  text-align: center;	
  text-decoration: none;
  color: ${props => props.theme.palette.txt.main};  
  background: ${props => props.theme.palette.background.card};
  -webkit-box-shadow: 8px 12px 25px 2px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 12px 25px 2px rgba(0,0,0,0.4);
          box-shadow: 8px 12px 25px 2px rgba(0,0,0,0.4);
            border: 1px solid ${props => props.theme.palette.border.primary};;
  -webkit-transition: padding 0.2s ease, margin 0.2s ease;
      -moz-transition: padding 0.2s ease, margin 0.2s ease;
        -o-transition: padding 0.2s ease, margin 0.2s ease;
        -ms-transition: padding 0.2s ease, margin 0.2s ease;
            transition: padding 0.2s ease, margin 0.2s ease;
  }

  .tabs li:first-child a {
  z-index: 3;
  }

  ul.tabs li a.active {
  margin: 5px 0 0 0;
  padding: 10px 0 10px 0;
  background: ${props => props.theme.palette.background.buttonHover};
  color: ${props => props.theme.palette.background.main};  
  z-index: 4;
  outline: none;
  }
  .group:before,
  .group:after {
    content: " "; /* 1 */
    display: table; /* 2 */
  }
  .group:after {
    clear: both;
  }
  #content {
  width: 100%;
  height: 44rem;
  margin-top: .5rem;
  border: 1px solid ${props => props.theme.palette.border.primary};  
  background: ${props => props.theme.palette.background.card};
  -webkit-box-shadow: 2px 8px 25px -2px rgba(0,0,0,0.3);
        -moz-box-shadow: 2px 8px 25px -2px rgba(0,0,0,0.3);
            box-shadow: 2px 8px 25px -2px rgba(0,0,0,0.3);
  -webkit-border-bottom-right-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-bottomright: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  }
  p{
  font-family: 'Open Sans', sans-serif;
  padding: 30px 40px;
  color: ${props => props.theme.palette.txt.white};
  line-height: 26px;
  font-size: 18px;
  margin: 0;
  }}
  .tabs li:nth-child(2) a {
  z-index: 2;
  }
  .tabs li:last-child a {
  z-index: 1;
  }

`;


const Tab1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab3 = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabOrganizer = styled.div`
        width: 55rem;
        display: flex;
        justify-content: space-between;
        align-items: center;  
        margin-bottom: .5rem;

        .input-text {
          width: 20rem;
        }

        input {
          padding: .5rem;
          background-color: ${props => props.theme.palette.background.main};
          color: ${props => props.theme.palette.txt.white};
          border: 1px solid ${props => props.theme.palette.border.primary};
          border-radius: .4rem;

          &:hover {
            border: 1px solid ${props => props.theme.palette.border.secondary};
            border-radius: .5rem;
          }
        }

`;

const CBContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 1rem;
  gap: 0.5rem;

  li {
    display: flex;
    justify-content: space-between;
    width: 17rem;

    label {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      cursor: pointer;
    }
  }
`;

const TextContainer = styled.div`
        width: 100%;
        height: 13rem;
        display: flex;
        flex-direction: column;
        justify-content: start; 
        margin-top: 2rem;

        p {
          font-size: 1rem;
          padding: 0;
        }
`;


const Contato = () => {
  const [activeTab, setActiveTab] = useState('contato');
  const [solicitante, setSolicitante] = useState("");
  const [greetings, setGreetings] = useState("");
  const [contato, setContato] = useState("");
  const [ticket, setTicket] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  

  const authenticatedUser = getAuthenticatedUser();
  const username = authenticatedUser ? authenticatedUser.username : '';
  

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    // Obter hora atual
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 6 && hours < 12 ) {
      //manhã
      setGreetings('Bom dia');
    } else if (hours >= 12 && hours < 18 ) {
      //tarde
      setGreetings('Boa tarde');
    } else {
      //noite
      setGreetings('Boa noite');
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const selectedValue = event.target.value;
  
    // Se a checkbox selecionada for a mesma que já está selecionada, desmarque-a
    setSelectedCheckbox((prevSelected) =>
      prevSelected === selectedValue ? null : selectedValue
    );
  };


  // Lógica para exibir o texto específico com base na escolha do rádio
  const getNumeroText = () => {
    if (selectedCheckbox === 'nitro') {
      return '(11) 2134-9011 /(11) 2147-6459';
    } else if (selectedCheckbox === 'oji') {
      return '(11) 2134-9024 / (11) 2147-6462';
    }
    return ''; // Retorne uma string vazia se nenhum rádio estiver selecionado
  };

//contato sem sucesso
const txt1 = `${greetings} ${solicitante}!

Foi realizada tentativa de contato no numero: ${contato}

Solicitamos que, por gentileza, entre em contato com o Helpdesk assim que possível atraves dos numeros abaixo:
${getNumeroText()}.

Atenciosamente,`;

//sem numero para contato
const txt2 = `${greetings} ${solicitante}!</p>

Não identificamos nenhum telefone para contato.

Solicitamos que, por gentileza, entre em contato com o Helpdesk assim que possível atraves dos numeros abaixo:
${getNumeroText()}.

Atenciosamente,`;

//contato teams
const txt3 =  `${greetings} ${solicitante}!

Aqui quem fala é o ${username} do helpdesk.

Motivo do meu contato, é referente ao chamado de numero: ${ticket}.

Podemos realizar atendimento?`;



  return (
    <ContatoContainer>
      <WrapContainer>
        <ul className="tabs group">
          <li>
            <a
              className={activeTab === 'contato' ? 'active' : ''}
              href="#/contato"
              onClick={() => handleTabClick('contato')}
            >
              Contato
            </a>
          </li>
          <li>
            <a
              className={activeTab === 'sem-contato' ? 'active' : ''}
              href="#/sem-contato"
              onClick={() => handleTabClick('sem-contato')}
            >
              Sem Contato
            </a>
          </li>
          <li>
            <a
              className={activeTab === 'teams' ? 'active' : ''}
              href="#/teams"
              onClick={() => handleTabClick('teams')}
            >
              Teams
            </a>
          </li>
        </ul>

        <div id="content" className="content">
          <p id="one" style={{ display: activeTab === 'contato' ? 'block' : 'none' }}>
            <Tab1>
              <TabOrganizer>
                <label htmlFor="solicitante">Nome do Solicitante: </label>
                <input 
                type="text" 
                className="i-text"
                value={solicitante}
                onChange={(event) => setSolicitante(event.target.value)} 
                />
              </TabOrganizer>
              <TabOrganizer>
                <label htmlFor="contato">Contato: </label>
                <input 
                type="text" 
                className="i-text"
                value={contato}
                onChange={(event) => setContato(event.target.value)} 
                />
              </TabOrganizer>
              <CBContainer isSelected={selectedCheckbox === 'nitro' || selectedCheckbox === 'oji'}>
                <li>
                  <label htmlFor="">Nitro: </label>
                  <input
                    type="checkbox"
                    name="contactType"
                    value="nitro"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckbox === 'nitro'}
                    className='custom-checkbox'
                  />
                </li>

                <li>
                  <label htmlFor="">Oji: </label>
                  <input
                    type="checkbox"
                    name="contactType"
                    value="oji"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckbox === 'oji'}
                    className='custom-checkbox'
                  />
                </li>
              </CBContainer>
              <TabOrganizer>
                <TextContainer>
                  <p> {greetings} {solicitante}!</p>
                  <p>Foi realizada tentativa de contato no numero: {contato}</p>
                  <p>Solicitamos que, por gentileza, entre em contato com o Helpdesk assim que possível atraves dos numeros abaixo:</p>
                  <p>{getNumeroText()}.</p>
                  <p>Atenciosamente,</p>
                </TextContainer>
              </TabOrganizer>
              <TabOrganizer>
                <CopyButton text={txt1} />
              </TabOrganizer>
            </Tab1>
          </p>
          <p id="two" style={{ display: activeTab === 'sem-contato' ? 'block' : 'none' }}>
          <Tab2>
              <TabOrganizer>
                <label htmlFor="solicitante">Nome do Solicitante: </label>
                <input 
                type="text" 
                className="i-text"
                value={solicitante}
                onChange={(event) => setSolicitante(event.target.value)} 
                />
              </TabOrganizer>
              <CBContainer isSelected={selectedCheckbox === 'nitro' || selectedCheckbox === 'oji'}>
                <li>
                  <label htmlFor="">Nitro: </label>
                  <input
                    type="checkbox"
                    name="contactType"
                    value="nitro"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckbox === 'nitro'}
                    className='input-color'
                  />
                </li>

                <li>
                  <label htmlFor="">Oji: </label>
                  <input
                    type="checkbox"
                    name="contactType"
                    value="oji"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckbox === 'oji'}
                    className='input-color'
                  />
                </li>
              </CBContainer>
              <TabOrganizer>
                <TextContainer>
                  <p> {greetings} {solicitante}!</p>
                  <p>Não identificamos nenhum telefone para contato.</p>
                  <p>Solicitamos que, por gentileza, entre em contato com o Helpdesk assim que possível atraves dos numeros abaixo:</p>
                  <p>{getNumeroText()}.</p>
                  <p>Atenciosamente,</p>
                </TextContainer>
              </TabOrganizer>
              <TabOrganizer>
                <CopyButton text={txt2} />
              </TabOrganizer>
            </Tab2>
          </p>
          <p id="three" style={{ display: activeTab === 'teams' ? 'block' : 'none' }}>
          <Tab3>
              <TabOrganizer>
                <label htmlFor="solicitante">Nome do Solicitante: </label>
                <input 
                type="text" 
                className="i-text"
                value={solicitante}
                onChange={(event) => setSolicitante(event.target.value)} 
                />
              </TabOrganizer>
              <TabOrganizer>
                <label htmlFor="contato">Chamado: </label>
                <input 
                type="text" 
                className="i-text"
                value={ticket}
                onChange={(event) => setTicket(event.target.value)} 
                />
              </TabOrganizer>
              <TabOrganizer>
                <TextContainer>
                  <p> {greetings} {solicitante}!</p>
                  <p>Aqui quem fala é o {username} do helpdesk.</p>
                  <p>Motivo do meu contato, é referente ao chamado de numero: {ticket}.</p>
                  <p>Podemos realizar atendimento?</p>
                </TextContainer>
              </TabOrganizer>
              <TabOrganizer>
                <CopyButton text={txt3} />
              </TabOrganizer>
            </Tab3>
          </p>
        </div>
      </WrapContainer>
    </ContatoContainer>
  );
};

export default Contato;
