import React from 'react'
import styled from '@emotion/styled';
import { auroraTheme, deepTheme, urbanTheme, nightTheme } from '../../components/theme/theme';


const ThemeContainer = styled.div`
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

const CardsThemeSelector = styled.div`
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


const AuroraPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .7rem;
    border: 2px solid ${props => props.theme.palette.border.secondary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      height: 100%;
    }

    #aurora1 {
      background-color: ${props => props.theme.palette.background.temaAurora1};
      color: ${props => props.theme.palette.background.temaAurora1};
      border-radius: .4rem 0 0 .4rem;
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #aurora2 {
      background-color: ${props => props.theme.palette.background.temaAurora2};
      color: ${props => props.theme.palette.background.temaAurora2};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #aurora3 {
      background-color: ${props => props.theme.palette.background.temaAurora3};
      color: ${props => props.theme.palette.background.temaAurora3};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #aurora4 {
      background-color: ${props => props.theme.palette.background.temaAurora4};
      color: ${props => props.theme.palette.background.temaAurora4};
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }
    #aurora5 {
      background-color: ${props => props.theme.palette.background.temaAurora5};
      color: ${props => props.theme.palette.background.temaAurora5};
      border-radius: 0 .4rem .4rem 0;
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }

    #aurora1, #aurora2, #aurora3, #aurora4, #aurora5 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      &:hover{
        font-size: .9rem;
        font-weight: bold;
      }    
    }
`;

const DeepPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .7rem;
    border: 2px solid ${props => props.theme.palette.border.secondary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      height: 100%;
    }

    #DO1 {
      background-color: ${props => props.theme.palette.background.temaDO1};
      color: ${props => props.theme.palette.background.temaDO1};
      border-radius: .4rem 0 0 .4rem;
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #DO2 {
      background-color: ${props => props.theme.palette.background.temaDO2};
      color: ${props => props.theme.palette.background.temaDO2};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #DO3 {
      background-color: ${props => props.theme.palette.background.temaDO3};
      color: ${props => props.theme.palette.background.temaDO3};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #DO4 {
      background-color: ${props => props.theme.palette.background.temaDO4};
      color: ${props => props.theme.palette.background.temaDO4};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #DO5 {
      background-color: ${props => props.theme.palette.background.temaDO5};
      color: ${props => props.theme.palette.background.temaDO5};
      border-radius: 0 .4rem .4rem 0;
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }

    #DO1, #DO2, #DO3, #DO4, #DO5 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      &:hover{
        font-size: .9rem;
        font-weight: bold;
      }    
    }
`;

const UrbanPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .7rem;
    border: 2px solid ${props => props.theme.palette.border.secondary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      height: 100%;
    }

    #urban1 {
      background-color: ${props => props.theme.palette.background.temaurban1};
      color: ${props => props.theme.palette.background.temaurban1};
      border-radius: .4rem 0 0 .4rem;
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }
    #urban2 {
      background-color: ${props => props.theme.palette.background.temaurban2};
      color: ${props => props.theme.palette.background.temaurban2};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #urban3 {
      background-color: ${props => props.theme.palette.background.temaurban3};
      color: ${props => props.theme.palette.background.temaurban3};
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }
    #urban4 {
      background-color: ${props => props.theme.palette.background.temaurban4};
      color: ${props => props.theme.palette.background.temaurban4};
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }
    #urban5 {
      background-color: ${props => props.theme.palette.background.temaurban5};
      color: ${props => props.theme.palette.background.temaurban5};
      border-radius: 0 .5rem .5rem 0;
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }

    #urban1, #urban2, #urban3, #urban4, #urban5 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      &:hover{
        font-size: .9rem;
        font-weight: bold;
      }    
    }
`;

const NightPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .7rem;
    border: 2px solid ${props => props.theme.palette.border.secondary};      
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      height: 100%;
    }

    #night1 {
      background-color: ${props => props.theme.palette.background.temanight1};
      color: ${props => props.theme.palette.background.temanight1};
      border-radius: .4rem 0 0 .4rem;
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #night2 {
      background-color: ${props => props.theme.palette.background.temanight2};
      color: ${props => props.theme.palette.background.temaDO1};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #night3 {
      background-color: ${props => props.theme.palette.background.temanight3};
      color: ${props => props.theme.palette.background.temanight3};
      &:hover {
        color: ${props => props.theme.palette.txt.white};
      }
    }
    #night4 {
      background-color: ${props => props.theme.palette.background.temanight4};
      color: ${props => props.theme.palette.background.temanight4};
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }
    #night5 {
      background-color: ${props => props.theme.palette.background.temanight5};
      color: ${props => props.theme.palette.background.temanight5};
      border-radius: 0 .4rem .4rem 0;
      &:hover {
        color: ${props => props.theme.palette.txt.black};
      }
    }

    #night1, #night2, #night3, #night4, #night5 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      &:hover{
        font-size: .9rem;
        font-weight: bold;
      }      
    }
`;

const ButtonContainer = styled.button`
    background-color: ${props => props.theme.palette.background.button};    
    width: 10rem;
    height: 4rem;
    border-radius: 1rem;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color:  ${props => props.theme.palette.txt.button};
    border: none;   

    &:hover {
      background-color: ${props => props.theme.palette.background.buttonHover};    
      color: ${props => props.theme.palette.txt.buttonh};    
      width: 15rem; 
    }
`;


const ThemeSelect = ({ changeTheme  }) => {
  const handleThemeChange = (theme) => {
    changeTheme(theme);
  };

  return (
    <ThemeContainer>
      <CardsContainer>
        <CardsThemeSelector>
            <h2>Aurora Boreau</h2>
          <AuroraPreviewContainer>
            <div className="theme-colors" id="aurora1">0E1518</div>
            <div className="theme-colors" id="aurora2">182830</div>
            <div className="theme-colors" id="aurora3">285868</div>
            <div className="theme-colors" id="aurora4">308890</div>
            <div className="theme-colors" id="aurora5">70b8c8</div>
          </AuroraPreviewContainer>
          <ButtonContainer onClick={() => handleThemeChange(auroraTheme)}>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
        <CardsThemeSelector>
            <h2>Deep Ocean</h2>
          <DeepPreviewContainer>
            <div className="theme-colors" id="DO1">0d1321</div>
            <div className="theme-colors" id="DO2">1d2d44</div>
            <div className="theme-colors" id="DO3">3e5c76</div>
            <div className="theme-colors" id="DO4">748cab</div>
            <div className="theme-colors" id="DO5">f0ebd8</div>
          </DeepPreviewContainer>
          <ButtonContainer onClick={() => handleThemeChange(deepTheme)}>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
        <CardsThemeSelector>
            <h2>Urban Modern</h2>
          <UrbanPreviewContainer>
            <div className="theme-colors" id="urban1">8a9c9b</div>
            <div className="theme-colors" id="urban2">1e2b32</div>
            <div className="theme-colors" id="urban3">a06a25</div>
            <div className="theme-colors" id="urban4">e48f0f</div>
            <div className="theme-colors" id="urban5">030609</div>
          </UrbanPreviewContainer>
          <ButtonContainer onClick={() => handleThemeChange(urbanTheme)}>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
        <CardsThemeSelector>
            <h2>Night</h2>
          <NightPreviewContainer>
            <div className="theme-colors" id="night1">0b1333</div>
            <div className="theme-colors" id="night2">191622</div>
            <div className="theme-colors" id="night3">3a317d</div>
            <div className="theme-colors" id="night4">5344a0</div>
            <div className="theme-colors" id="night5">a364b8</div>
          </NightPreviewContainer>
          <ButtonContainer onClick={() => handleThemeChange(nightTheme)}>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
      </CardsContainer>
    </ThemeContainer>
  )
}

export default ThemeSelect