import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  list-style: none;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    gap: 40px;
  }
`;

export const FilterItem = styled.li<FilterItemProps>`
  text-transform: uppercase;
  color: var(--text-dark);
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    line-height: 22px;
    font-size: 16px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export const FilterContainerPripority = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 10px;
 
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 3px;

      @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
        margin-left: 10px;
      }
    }
  }
`;

export const PriorityFilter = styled.ul`
  position: absolute;
  background-color: #ffff;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  list-style: none;
  width: 200px;
  top: 100%;
  right: 8px;
  z-index: 9999;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;

    &:hover {
      border-bottom: 0.5px solid var(--orange-low);
    }
  }

  li + li {
    margin-top: 4px;
  }
`;
