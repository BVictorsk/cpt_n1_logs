import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneDisabledOutlinedIcon from '@mui/icons-material/PhoneDisabledOutlined';

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

        .text {
            display: flex;
        }
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;
    color: ${props => props.theme.palette.txt.main};
    display: flex;
    flex-direction: row;
    gap: 1rem;
    transition: all .2s;

    .text {
        display: none;
    }

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

const Sidebar = ({ themeChanged, setThemeChanged }) => {
    const [isHovered, setHovered] = useState(false);

    useEffect(() => {
        if (themeChanged) {
            window.location.reload();
        }
      }, [themeChanged, setThemeChanged]);

    return (
        <SidebarContainer onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ul>
                <li>
                    <StyledNavLink to='/' className="text">
                        <HomeOutlinedIcon />
                        <span className="text">Home</span>
                    </StyledNavLink>
                </li>

                <SidebarDiv /> 

                <li>
                    <StyledNavLink to='/Cpt' className="text">
                        Cpt
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/Nitro' className="text">
                        Nitro
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/Oji' className="text">
                        Oji 
                    </StyledNavLink>
                </li>

                <SidebarDiv /> 

                <li>
                    <StyledNavLink to='/Contato-Logs' className="text">
                        <PhoneDisabledOutlinedIcon />
                        <span className="text">Contato</span>
                    </StyledNavLink>
                </li>

                <SidebarDiv /> 

                <li>
                    <StyledNavLink to='/theme-change'>
                        <FormatPaintIcon />
                        <span className="text">Temas</span>
                    </StyledNavLink>
                </li>
            </ul>
        </SidebarContainer>
    )
}

export default Sidebar;
