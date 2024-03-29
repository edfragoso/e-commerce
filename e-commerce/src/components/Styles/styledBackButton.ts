"use client";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--secondary-text);

  &:hover {
    text-transform: uppercase;
  }
`;
