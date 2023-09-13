import styled from "styled-components";

const Divider = styled.span`
  width: 100%;
  height: 1px;
  margin: 8px 0;
  padding: 0;
  background: var(--shapes);
`;
export function DividerSpace() {
  return <Divider></Divider>;
}
