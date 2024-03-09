import { Link } from "react-router-dom";

const { default: styled } = require("styled-components");

export const Networks = styled.button`
position: relative;
width: 192px;
height: 48px;
border-radius: 6px;
background-color:var(--color-white);
border: 1px solid var(--border); 
color:var(--color-text);
font-size: 14px;
line-height:1.4px ;
font-weight: 500;
padding: 0px 20px;

  &::before {
        content: ''; 
        position: absolute;
        left: 50%;
        bottom:-38px;
        width: 180px; 
        height: 1px; 
        background-color:var(--border);  
        transform: translateX(-50%);
    }

`;
export const WordBesideLink = styled.span`
    position: absolute;
    left: 95%;
    bottom: 59%;
    color: var(--border);
    font-size: 14px;
    font-weight: 500;
`;
export const StyledWrapBtn = styled.div`
    display: flex;
    gap: 16px;
`;

export const StyledNetworks = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(50%, -50%);
`;

export const StyleForm = styled.form`
    margin-top: 76px;
margin-bottom: 25px;
`;

export const Wrapper = styled.div`
 display: flex;
justify-content: end;

`;
export const StyledLink = styled(Link)`
line-height: 1.4;
   color: var(--color-blue);
`;

export const StyledTitle = styled.p`
   display: inline;
`;