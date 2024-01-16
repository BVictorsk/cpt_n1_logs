import React from 'react'
import styled from '@emotion/styled';

const HomeContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};  ;
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
`;

const Home = () => {
  return (
    <HomeContainer>teste</HomeContainer>
  )
}

export default Home