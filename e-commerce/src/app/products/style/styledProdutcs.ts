import styled from "styled-components";

export const Cointainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    width: 100%;
    gap: 32px;

    img {
      border-radius: 10px;
      max-width: 640px;
      width: 50%;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin-left: 20px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-transform: uppercase;
        background: #115d8c;
        mix-blend-mode: multiply;
        border: none;
        border-radius: 4px;
        color: #ffff;
        cursor: pointer;
        padding: 10px 0;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

        &:hover {
          box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.8);
          transform: scale(1.01);
        }
      }
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark);
  }
  div {
    h3 {
      margin-top: 60px;
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      font-weight: 400;
      color: var(--text-dark);
    }
  }
`;
