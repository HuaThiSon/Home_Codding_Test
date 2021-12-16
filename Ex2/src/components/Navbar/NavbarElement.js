import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from 'react-scroll'
import { BiUser } from "react-icons/bi";

export const Nav = styled.nav`
  background: #000;
  height: 62px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;


  @media screen and (max-width: 960) {
      transition: 0.8s all ease;
  }
`;

export const  NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    height: 80px;
    font-family: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo = styled(LinkR)` 
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  /* float: left; */
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width:768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  padding-right: 200px;
  @media screen and (max-width: 1024px) {
      /* padding-right: 0; */
      display: none;
  }
  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li` 
  height: 80px;
  display: flex;
  align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinks = styled(LinkS)` 
    color:#fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
      /* padding-right: 0; */
      display: none;
  }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FFFF;
    white-space: nowrap;
    padding: 10px 22px;
    color:#000000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out ;
        background: #E2E2E2;
        color: #000000;
    }
`;

export const NavBtnInfo = styled(LinkR)`
    border-radius: 50px;
    background: #000;
    white-space: nowrap;
    padding: 10px 22px;
    color:#ffffff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out ;
        background: rgb(84, 84, 84);
        color: #ffffff;
    }
`;

export const User = styled(BiUser)` 
    color: #fff;
`;