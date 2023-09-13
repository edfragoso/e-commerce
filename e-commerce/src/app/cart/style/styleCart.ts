import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const CartListContainer = styled.div`
  h3 {
    margin-top: 24px;
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`;

export const CardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #ffff;
  min-width: 30%;
  padding: 10px 20px;
  margin-top: 0px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    margin-top: 130px;
    padding: 16px 24px;
    margin-top: 10px;
  }

  h3 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }
`;

export const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 400;
  font-weight: ${(props) => (props.isBold ? "600" : "400")};
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
`;

export const ShopBtn = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 12px;
  color: #ffff;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background: var(--success-color);
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.8);
    transform: scale(1.01);
  }
`;
