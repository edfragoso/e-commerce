import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
  width: 256px;
  cursor: pointer;

  &:hover {
    border-radius: 8px 8px 0px 0px;
    box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.8);
    transform: scale(1.01);
  }

  img {
    width: 256px;
    height: 300px;
    border-radius: 8px 8px 0px 0px;
  }
  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark2);
  }
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }
   div {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 12px;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;

  @media(min-width: ${props => props.theme.desktopBreakpoint}) {
      font-size: 40px;
    }
`;
