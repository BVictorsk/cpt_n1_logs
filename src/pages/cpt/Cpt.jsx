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

const Cpt = () => {
  return (
    <CptContainer>teste</CptContainer>
  )
}

export default Cpt