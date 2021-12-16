import styled from "styled-components";
// import BusinessSection from ".";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const BusinessContainer = styled.section` 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

`
export const BSNImg = styled.img` 
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
    z-index: -1;
    width: 100%;
    height: 400px;
    --o-object-fit:cover;
    object-fit:cover;
    left:50%;
    min-width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroContent = styled.div` 
    z-index:3;
    max-width: 50%;
    position: absolute;
    padding:8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    padding-right: 600px;
    padding-bottom: 400px;
`;

export const HeroH1 = styled.h2`
    color:#000000;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;

    @media screen and (max-width:480px) {
        font-size: 32px;
    }
    
`

export const HeroP = styled.p` 
    margin-top: 24px;
    color:currentColor;
    font-size: 16px;
    max-width: 600px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;

    @media screen and (max-width:768px) {
        font-size: 24px;
    }

    @media screen and (max-width:480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div` 
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 1;
  background: #000000;
  color: #fff;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 5px solid black;
    opacity: 1;
  `}
  &:hover{
    background-color: #333333;
  }
`;

