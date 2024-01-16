import React from 'react'
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
    background: ${props => props.theme.palette.sidebar.main};  
    flex: 1;
    height: 100vh;
    transition: all 0.3s;
    border-right: 2px solid ${props => props.theme.palette.border.primary};

    ul {
        margin-top: 2rem;
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

const Sidebar = () => {
  return (
    <SidebarContainer>
        <ul>
            <li>
                <StyledNavLink to='/'>Home</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to='/theme-change'>Temas</StyledNavLink>
            </li>
        </ul>
    </SidebarContainer>
  )
}

export default Sidebar