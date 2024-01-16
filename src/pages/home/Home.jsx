import React from 'react'
import styled from '@emotion/styled';
import imagecpt from '../../assets/cpt.png'
import imagenitro from '../../assets/nitro.webp'
import imageoji from '../../assets/oji.png'
import { NavLink } from 'react-router-dom';

const HomeContainer = styled.div`
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


const CardsHome = styled.div`
    background-color: ${props => props.theme.palette.background.card};    ;
    width: 45%;
    height: 47%;
    transition: all 0.1s;
    border-radius: .5rem;
    border: 1px solid ${props => props.theme.palette.border.primary};  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: 2rem;
    
    &:hover {
      border: 1px solid ${props => props.theme.palette.border.secondary};
    }

    h2 {
      font-size: 2rem;
      color: ${props => props.theme.palette.txt.select};
    }
`;

const CardsImageContainer = styled.div`
    background-color: ${props => props.theme.palette.txt.white};    ;
    width: 97%;
    height: 95%;
    transition: all 0.1s;
    border-radius: .5rem;
    border: 1px solid ${props => props.theme.palette.border.primary};  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    
    img {
      width: 90%;
      height: 90%;
    }
`;


const StyledNavLink = styled(NavLink)`

`;


const Home = () => {
  return (
    <HomeContainer>
      <CardsContainer>
        <CardsHome>
          <CardsImageContainer>
            <StyledNavLink to='/Cpt'>
              <img src={imagecpt} alt="cpt" />
            </StyledNavLink>
          </CardsImageContainer>
        </CardsHome>
        <CardsHome>
          <CardsImageContainer>
            <StyledNavLink to='/Nitro'>
              <img src={imagenitro} alt="nitro" />
            </StyledNavLink>
          </CardsImageContainer>
        </CardsHome>
        <CardsHome>
          <CardsImageContainer>
            <StyledNavLink to='/Oji'>
              <img src={imageoji} alt="oji" />
            </StyledNavLink>
          </CardsImageContainer>
        </CardsHome>
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home