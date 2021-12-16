import React from 'react';
import {FaBars} from 'react-icons/fa'
import Products from './Products';
import Dropdown from './Dropdown'
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavItem,
        NavMenu,
        NavBtn,
        NavBtnLink,
        NavBtnInfo,
        User,
    
    }
 from './NavbarElement';


export const Navbar = ({toggle}) => {
    
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                Uber
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Dropdown/>
                    </NavItem>
                    <NavItem>
                        <NavBtnInfo to='Seguridad'> Seguridad</NavBtnInfo>
                    </NavItem>
                    <NavItem>
                        <NavBtnInfo to='Ayuda'> Ayuda</NavBtnInfo>
                    </NavItem>
                    <NavItem>
                        <NavBtnInfo to='COVID'>COVID-19:Recursos</NavBtnInfo>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnInfo to="/es"> ES</NavBtnInfo>
                </NavBtn>
                <NavBtn>
                    <Products/>
                    {/* <NavBtnInfo to="/product"> Productos</NavBtnInfo> */}
                </NavBtn>
                <NavBtn>
                    <NavBtnInfo to="/infomation">
                <User/> Inicia sesión</NavBtnInfo>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/Register"> Regístrate</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;