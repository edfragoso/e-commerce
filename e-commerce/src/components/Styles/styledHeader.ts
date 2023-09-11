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
  padding: 12px 24px ;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
      padding: 20px 160px;
    }
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
    padding: 20px 160px;
    gap: 24px;
  }
`;

export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    cursor: pointer;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
      font-size: 40px;
    }
`;
