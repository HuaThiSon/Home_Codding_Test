import React from 'react'
import {
    CloseIcon,
    SidebarContainer,
    Icon,
    SidebarBtnWraper,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute
     
} from './SildebarEmlements'

export const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick= {toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>about</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>about</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>about</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>Sign Up</SidebarLink>     
                </SidebarMenu>
                <SidebarBtnWraper>
                    <SidebarRoute to= "/signin">Sign In</SidebarRoute>
                </SidebarBtnWraper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar