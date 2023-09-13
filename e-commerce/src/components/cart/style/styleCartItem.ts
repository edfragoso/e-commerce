import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 8px;
  background-color: #ffff;
  position: relative;
  width: 100%;
  
  @media(min-width: ${props => props.theme.desktopBreakpoint}) {
      width: 100%;
      height: 210px;
    }

  button{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    border: none;
    background: transparent;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
      top: 16;
      right: 24px;
    }
  }

  img {
    max-height: 100%;
    width: 150px;
    border-radius: 8px 0 0 8px;
    
    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
      width: 256px;
    }
  }
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 8px 10px;
    line-height: 150%;
    color: var(--text-dark-2);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
      padding: 16px 24px;
    }

    h4 {
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 5px;
      
      @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-weight: 300;
      font-size: 20px;
      }
    }

    p {
      font-weight: 400;
      font-size: 12px;
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;

      @media(min-width: ${props => props.theme.desktopBreakpoint}){
        max-width: 50%;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`;

export const SelectQuantity = styled.select`
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 8px;
    font-size: 16px
  }
`;
