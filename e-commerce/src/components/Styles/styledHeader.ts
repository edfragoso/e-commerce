"use client"
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

export const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ["latin"],
})

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  
  @media(min-width: ${props => props.theme.tableBreakpoint}){
    padding: 10px 50px;
  }
  
 
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
      padding: 10px 100px;
    }

  }

  
`;

export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    cursor: pointer;
    text-decoration: none;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
      font-size: 40px;
    }
`;
