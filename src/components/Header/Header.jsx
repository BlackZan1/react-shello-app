import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const HeaderComponent = styled.header`
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999999999;
`

const HeaderLogo = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    font-family: 'Righteous', san-serif;
    letter-spacing: 3px;
`

const Header = () => {
    let headerData = useSelector((state) => ({
        color: state.header.color
    }))

    return (
        <HeaderComponent style={{background: headerData.color}}>
            <NavLink to={'/react-shello-app'} style={{textDecoration: 'none'}}>
                <HeaderLogo>
                    Shello
                </HeaderLogo>
            </NavLink>
        </HeaderComponent>
    )
}

export default Header;