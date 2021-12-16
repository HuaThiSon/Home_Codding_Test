import React, { Component } from "react";
import styled from "styled-components";


const StyledLi = styled.li`
  float: left;
`;

const Scrollbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  /* padding: 14px 16px; */
  padding: 10px 22px;

  text-decoration: none;
`;

const ScrollContent = styled.div`
  display: none;
  position: relative;
  background-color: #f9f9f9;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  cursor: pointer;
  padding-right: 0;
  list-style: none;
  height:40vh;
  overflow-y: auto;
`;

const ScrollLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    cursor: pointer;
    border-radius:30px;
    height: 40px;
    transition: all 0.2 ease-in-out ;
    background: rgb(84, 84, 84);
    color: #ffffff;
  }
  &:hover ${ScrollContent} {
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
        <ScrollLi>
          <Scrollbtn onClick={() => this.handleClick("DropDown")}>
          Productos
          </Scrollbtn>
          <ScrollContent>
            {" "}
            <SubA onClick={() => this.handleClick("Home")} href="https://www.uber.com/us/es/about/">Home</SubA>
            <SubA onClick={() => this.handleClick("Ride")} href="https://www.uber.com/us/en/ride/">Ride</SubA>
            <SubA onClick={() => this.handleClick("Drive")} href="https://www.uber.com/us/en/drive/">Drive</SubA>
            <SubA onClick={() => this.handleClick("Eat")}href="https://www.ubereats.com/?uclick_id=4a894208-1e2a-48f7-b748-0a5169182414">Eat</SubA>
            <SubA onClick={() => this.handleClick("Restaurants")}href="https://merchants.ubereats.com/?uclick_id=4a894208-1e2a-48f7-b748-0a5169182414">Restaurants</SubA>
            <SubA onClick={() => this.handleClick("Freight")}href="https://www.uber.com/us/en/freight/">Freight</SubA>
            <SubA onClick={() => this.handleClick("Bike&scoot")}href="https://www.uber.com/vi-VN/blog/hanoi/">Bike &amp; scoot</SubA>
            <SubA onClick={() => this.handleClick("Transit")}href="https://www.uber.com/us/en/transit/">Transit</SubA>
            <SubA onClick={() => this.handleClick("Business")}href="https://www.uber.com/us/en/business//">Business</SubA>
            <SubA onClick={() => this.handleClick("Money")}href="https://www.uber.com/us/en/money/">Money</SubA>
          </ScrollContent>
        </ScrollLi>
    );
  };
}

export default Menu;