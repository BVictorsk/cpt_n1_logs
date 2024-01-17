import React from 'react'
import styled from '@emotion/styled';

const CptContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    ;
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const CardsContainer = styled.div`    ;
    width: 80%;
    height: 85vh;
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    gap: 5rem;
    flex-wrap: wrap;
`;


const CardsCpt = styled.div`
    background-color: ${props => props.theme.palette.background.card};    ;
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
        a{
          text-decoration: none;
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 4rem;
          font-size: 2rem;
          align-items: center;
          margin-bottom: .5rem;
          gap: .5rem;
          transition: all .2s;

          p {
            color: ${props => props.theme.palette.txt.white};
          }
  
          &:hover {
            background-color: ${props => props.theme.palette.background.buttonHover};
            border-radius: .3rem;
          }
        }

      }
    }
`;


const LiBorder = styled.div`    ;
    width: .5rem;
    height: 80%;
    transition: all 0.3s;
    background-color: ${props => props.theme.palette.border.primary};
    margin: 2px;
`;




const Cpt = () => {
  return (
    <CptContainer>
      <CardsContainer>
        <CardsCpt>
          <h2>Procedimento - Criação de Acessos CPT</h2>
          <ul>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-nDG/page/criacao-de-acessos-clt-e-estagiario">
              <LiBorder/>
              <p>Criação de Acessos (CLT e Estagiário)</p>
              </a>
            </li>
            <li>
              <a href="https://wiki1.computecnica.com.br/books/nivel-1-nDG/page/criacao-de-acessos-pj-empresa-terceira">
              <LiBorder/>
              <p>Criação de Acessos (PJ/terceiro)</p>
              </a>
            </li>
          </ul>
        </CardsCpt>
        <CardsCpt>
          <h2>Procedimento - Desativação de Acessos CPT</h2>
            <ul>
              <li>
                <a href="https://wiki1.computecnica.com.br/books/nivel-1-nDG/page/desativacao-de-acessos-ad-e-mail-e-desk-manager">
                  <LiBorder/>
                  <p>Desativação de acessos</p>
                </a>
              </li>
              <li>
                <a href="https://wiki1.computecnica.com.br/books/nivel-1-nDG/page/desativacao-de-acessos-redirect-de-e-mail">
                  <LiBorder/>
                  <p>Redirect de E-mail</p>
                </a>
              </li>
            </ul>
        </CardsCpt>
      </CardsContainer>
    </CptContainer>
  )
}

export default Cpt