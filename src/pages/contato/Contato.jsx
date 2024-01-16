import React from 'react'
import styled from '@emotion/styled';

const ContatoContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    ;
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contato = () => {
  return (
    <ContatoContainer>Contato</ContatoContainer>
  )
}

export default Contato