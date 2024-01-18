import React from 'react'
import styled from '@emotion/styled';

const NitroContainer = styled.div`
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


const LiBorder = styled.div`    ;
    width: .5rem;
    height: 85%;
    transition: all 0.3s;
    background-color: ${props => props.theme.palette.border.primary};
    margin: 2px;
`;


const Nitro = () => {
  return (
    <NitroContainer>
      <CardsContainer>
        <CardsCpt>
          <h2>Procedimento - Criação de Acessos CPT</h2>
          <ul>
            <li>
              <LiBorder/>
              <p>Criação de Acessos (CLT)</p>
            </li>
            <li>
              <LiBorder/>
              <p>Criação de Acessos (Estagiário)</p>
            </li>
            <li>
              <LiBorder/>
              <p>Criação de Acessos (Aprendiz)</p>
            </li>
            <li>
              <LiBorder/>
              <p>Criação de Acessos (PJ)</p>
            </li>
            <li>
              <LiBorder/>
              <p>Criação de Acessos (RTV)</p>
            </li>
          </ul>
        </CardsCpt>
        <CardsCpt>
          <h2>Procedimento - Acessos de grupo de segurança</h2>
          <ul>
            <li>
              <a href="https://nitroquimica-my.sharepoint.com/personal/robertocj_nitroquimica_com_br/_layouts/15/Doc.aspx?sourcedoc=%7B682C181C-4E02-4AB9-8EA7-1781D6942B97%7D&file=Sao_Miguel-Pinheiros.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&ct=1705583407591&wdOrigin=OFFICECOM-WEB.MAIN.REC&cid=046504de-9763-43eb-b43f-1ff67d58aecd&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=d317ff0f-acda-45a1-876c-b8fcad95dafb" target='_blank' className='ab'>
                <LiBorder/>
                <p>Planilha de acessos</p>
              </a>
            </li>
          </ul>
        </CardsCpt>
        <CardsCpt>
          <h2>Procedimento - Sistemas Nitro</h2>
          <ul>
            <li>
              <a href="https://computecnicatecnologia.sharepoint.com/:w:/r/sites/ServiceDesk/_layouts/15/Doc.aspx?sourcedoc=%7BA1F033C4-D5A5-4DB7-9145-3F01F3769540%7D&file=NIQ.36.0%20-Reset%20de%20senha%20SAL.docx&action=default&mobileredirect=true&DefaultItemOpen=1" target='_blank'>
                <LiBorder/>
                <p>Reset de senha(Sal)</p>
              </a>
            </li>
            <li>
              <a href="https://computecnicatecnologia.sharepoint.com/sites/ServiceDesk/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FServiceDesk%2FDocumentos%20Compartilhados%2FAntigo%20CPT15%2FClientes%2FClientes%2FNitroquimica%2F6%2DProcedimentos%2FProcedimentos%20HELP%2DDESK%2FProcedimentos%20PDF%2FNIQ%2E17%2E1%20%2D%20Suricato%20%2D%20Cria%C3%A7%C3%A3o%2C%20desbloqueio%20e%20reset%20de%20senha%2Epdf&parent=%2Fsites%2FServiceDesk%2FDocumentos%20Compartilhados%2FAntigo%20CPT15%2FClientes%2FClientes%2FNitroquimica%2F6%2DProcedimentos%2FProcedimentos%20HELP%2DDESK%2FProcedimentos%20PDF" target='_blank' className='ab'>
              <LiBorder/>
              <p>Criação, Desbloqueio ou Reset(Suricato)</p>
              </a>
            </li>
          </ul>
        </CardsCpt>
      </CardsContainer>
    </NitroContainer>
  )
}

export default Nitro