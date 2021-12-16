import React, { Component } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  padding-left: 0;
  list-style: none;
  height:56vh;
  overflow-y: auto;
`;

const StyledLi = styled.li`
  float: left;
  
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 10px 22px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  cursor: pointer;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    cursor: pointer;
    border-radius:30px;
    height: 40px;
    transition: all 0.2 ease-in-out ;
    background: rgb(84, 84, 84);
    color: #ffffff;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;


const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

class Menu extends Component {
  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
    //   <StyledUl>
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("DropDown")}>
          Companía 
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("Quiénessomos")} href="https://www.uber.com/us/es/about/">Quiénes somos</SubA>
            <SubA onClick={() => this.handleClick("Loqueofrecemos")} href="https://www.uber.com/us/es/about/uber-offerings/">Lo que ofrecemos</SubA>
            <SubA onClick={() => this.handleClick("CosmoofunctionaUber")} href="https://www.uber.com/us/es/about/how-does-uber-work/">Cosmoo functiona Uber</SubA>
            <SubA onClick={() => this.handleClick("Ciudadaníaglobal")}href="https://www.uber.com/us/es/community/">Ciudadanía global</SubA>
            <SubA onClick={() => this.handleClick("Saladeprensa")}href="https://www.uber.com/vi-VN/newsroom/">Sala de prensa</SubA>
            <SubA onClick={() => this.handleClick("Relacionesconlosinversionistas")}href="https://investor.uber.com/home/default.aspx">Relaciones con los inversionistas</SubA>
            <SubA onClick={() => this.handleClick("Blog")}href="https://www.uber.com/vi-VN/blog/hanoi/">Blog</SubA>
            <SubA onClick={() => this.handleClick("Careras")}href="https://www.uber.com/us/es/careers/">Careras</SubA>


          </DropDownContent>
        </DropDownLi>
    //   </StyledUl>
    );
  };
}

export default Menu;