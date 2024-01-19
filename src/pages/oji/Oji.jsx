import React from 'react'
import styled from '@emotion/styled';

const NitroContainer = styled.div`;
    background-color: ${props => props.theme.palette.background.main};    
    width: 100%;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardsContainer = styled.div`;
    width: 80%;
    height: 85vh;
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    gap: 5rem;
    flex-wrap: wrap;
`;


const CardsOji = styled.div`;
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 47%;
    transition: all 0.1s;
    border-radius: .5rem;
    border: 1px solid ${props => props.theme.palette.border.primary};  
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center; 
    gap: 2rem;
    padding: 1rem;
    
    &:hover {
      border: 1px solid ${props => props.theme.palette.border.secondary};
    }

    h2 {
      font-size: 2rem;
      color: ${props => props.theme.palette.txt.select};
    }

    ul {
      list-style: none;
      width: 90%;

      li {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 3rem;
        font-size: 1.7rem;
        align-items: center;
        margin-bottom: .5rem;
        gap: .5rem;
        transition: all .2s;

        a{
          text-decoration: none;
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 3rem;
          font-size: 2rem;
          align-items: center;
          margin-bottom: .5rem;
          gap: .5rem;
          transition: all .2s;
          margin-top: .5rem;
        }

        p {
          color: ${props => props.theme.palette.txt.white};
        }

        &:hover {
          background-color: ${props => props.theme.palette.background.buttonHover};
          border-radius: .3rem;
        }

      }
    }
`;


const LiBorder = styled.div`;
    width: .5rem;
    height: 85%;
    transition: all 0.3s;
    background-color: ${props => props.theme.palette.border.primary};
    margin: 2px;
`;


const Oji = () => {
  return (
    <NitroContainer>
      <CardsContainer>
        <CardsOji>
          <h2>Procedimento - Acessos OJI</h2>
          <ul>
            <li>
              <LiBorder/>
              <p>Criação de Acessos</p>
            </li>
            <li>
              <LiBorder/>
              <p>Desativação de Acessos</p>
            </li>
          </ul>
        </CardsOji>
        <CardsOji>
          <h2>Procedimento - VPN</h2>
          <ul>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-7Qu/page/vpn-liberacao-de-acesso-funcionario" target='_blank'>
                <LiBorder/>
                <p>VPN - Liberação - Fucionário</p>
              </a>
            </li>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-7Qu/page/vpn-liberacao-de-acesso-terceiroext" target='_blank'>
              <LiBorder/>
              <p>VPN - Liberação - Terceiro</p>
              </a>
            </li>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-7Qu/page/vpn-revogacao-de-acesso-funcionario" target='_blank'>
              <LiBorder/>
              <p>VPN - Revogação - Fucionário</p>
              </a>
            </li>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-7Qu/page/vpn-revogacao-de-acesso-terceiro" target='_blank'>
              <LiBorder/>
              <p>VPN - Revogação - Terceiro</p>
              </a>
            </li>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-7Qu/page/vpn-revogacao-de-acesso-terceiro" target='_blank'>
              <LiBorder/>
              <p>VPN - Logs</p>
              </a>
            </li>
          </ul>
        </CardsOji>
      </CardsContainer>
    </NitroContainer>
  )
}

export default Oji