import React from 'react'
import styled from '@emotion/styled';

const OjiContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    ;
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Oji = () => {
  return (
    <OjiContainer>Oji</OjiContainer>
  )
}

export default Oji