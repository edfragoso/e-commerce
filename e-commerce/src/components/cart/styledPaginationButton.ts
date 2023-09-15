import styled from "styled-components";

interface ListBtnProps {
  selected: boolean;
  disabled: boolean;
}

export const LisBtn = styled.button<ListBtnProps>`
  text-align: center;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 14px;
  font-family: inherit;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
  
  cursor: ${(props) => (!props.selected ? "pointer" : "cursor")};
  background-color: ${(props) => (props.selected ? "#fff" : "var(--shapes)")};
  font-weight: ${(props) => (!props.selected ? "300" : "600")};
  color: ${(props) =>
    !props.selected ? "var(--text-dark2: #41414d)" : "var(--orange-low)"};
  border: ${(props) =>
    props.selected && !props.disabled ? "0.05px solid var(--orange-low)" : "none"};
  

  &:hover {
    /* box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.8);
    transform: scale(1.01); */
    background-color: #ffff;
   border: ${(props) =>
      !props.selected ? "1px solid var(--orange-low)" : ""};
  }
`;
