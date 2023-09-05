import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
  text-transform: uppercase;
  color: var(--text-dark);
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  text-align: center;
  line-height: 22px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`;
