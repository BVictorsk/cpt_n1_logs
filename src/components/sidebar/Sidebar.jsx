import React from 'react'
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
    background: ${props => props.theme.palette.sidebar.main};  
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100vh;
    transition: all 0.3s;
    border-right: 2px solid ${props => props.theme.palette.border.primary};

    ul {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        list-style-type: none;
        li {
            margin: .5rem;
            
        }
    }

    &:hover {
        flex: 2;
        border-right: 1px solid ${props => props.theme.palette.border.secondary};
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem;
    margin-top: 1rem;
    color: ${props => props.theme.palette.txt.main};
    
    &:hover {
        color: ${props => props.theme.palette.txt.select};
    }
`;

const SidebarDiv = styled.div`
    height: 1px;
    width: 4rem;
    margin: 1rem 0 1rem 0;
    background-color: ${props => props.theme.palette.border.primary};
`;


const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <li>
                    <StyledNavLink to='/'>Home</StyledNavLink>
                </li>

                <SidebarDiv /> 

                <li>
                    <StyledNavLink to='/Cpt'>Cpt</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/Nitro'>Nitro</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/Oji'>Oji</StyledNavLink>
                </li>

                <SidebarDiv /> 

                <li>
                    <StyledNavLink to='/Contato'>Contato</StyledNavLink>
                </li>

                <SidebarDiv /> 

                <li>
                    <StyledNavLink to='/theme-change'>Temas</StyledNavLink>
                </li>
            </ul>
        </SidebarContainer>
  )
}

export default Sidebar