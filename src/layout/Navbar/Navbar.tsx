import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div<{ changeBG?: boolean }>`
    background: ${({changeBG}) => changeBG ? '#7562E0' : 'transparent'};
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 4);
    z-index: 10;
    position: sticky;
    top: 0;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 820px) {
        height: 60px;
    }

    @media screen and (max-width: 768px) {
        background: ${({changeBG}) => changeBG ? '#7562E0' : 'transparent'} !important;
        height: 40px;
    }
`;

const NavLink = styled(Link)<{ changeBG?: boolean }>`
    color: ${({changeBG}) => changeBG ? '#FFF' : '#373737'};
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: 'OpenSans-Semibold', 'sans-serif';
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: ${({changeBG}) => changeBG ? '#5D4EB3' : '#7562E0'};
        transition: all 0.3s ease-in;
    }

    @media screen and (max-width: 768px) {
        color: ${({changeBG}) => changeBG ? '#FFF' : '#FFF'};

        &:hover {
            color: ${({changeBG}) => changeBG ? '#FFF' : '#FFF'};
            transition: all 0.3s ease-in;
        }
    }
`;

const NavbarBrand = styled(Link)<{logoColor?: boolean}>`
    color: ${({logoColor}) => logoColor ? '#FFF' : '#7562E0'};
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'OpenSans-Bold', 'sans-serif';
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({logoColor}) => logoColor ? '#5D4EB3' : '#7562E0'};
        transition: all 0.3s ease-in;
    }

    @media screen and (max-width: 768px) {
        padding-left: 1.5rem;
        color: ${({logoColor}) => logoColor ? '#FFF' : '#7562E0'};
    }
`;

const Bars = styled(FaBars)<{ changeBG?: boolean }>`
    display: none;
    color: #FFF;

    @media screen and (max-width: 820px) {
        display: block;
        position: absolute;
        top: 0px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.9rem;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        color: ${({changeBG}) => changeBG ? '#FFF' : '#7562E0'};
        display: block;
        position: absolute;
        top: -2px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

const NavMenu = styled.div<{ showNav?: boolean }>`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 820px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 55px;
        left: ${({showNav}) => showNav ? '0px' : '-1000px'};
        height: 80vh;
        width: 100%;
        z-index: -30;
        background-color: #7562E0;
        transition: all 0.3s ease-in;
    }
`;

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [logo, setLogo] = useState(false);

    const changeBackgroundColor = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 60) {
          setNavbar(true);
          setLogo(true);
      } else if (window.scrollY >= 40){
          setNavbar(true);
          setLogo(true);
      } else {
          setNavbar(false);
          setLogo(false);
      }
    }

    const showNavigation = () => {
        setShowNav(!showNav);
    }

    window.addEventListener('scroll', changeBackgroundColor);

    return (
        <>
            <Container changeBG={navbar}>
                <NavbarBrand to="/" logoColor={logo}>
                    <h2>Portfolio</h2>
                </NavbarBrand>
                <Bars onClick={showNavigation} changeBG={navbar}/>
                <NavMenu showNav={showNav}>
                    <NavLink to="/home" changeBG={navbar}>
                        Home
                    </NavLink>
                    <NavLink to="/home" changeBG={navbar}>
                        About Me
                    </NavLink>
                    <NavLink to="/home" changeBG={navbar}>
                        Technology Skills
                    </NavLink>
                    <NavLink to="/home" changeBG={navbar}>
                        Works
                    </NavLink>
                    <NavLink to="/home" changeBG={navbar}>
                        Contact
                    </NavLink>
                </NavMenu>
            </Container>
        </>
    )
};

export default Navbar;