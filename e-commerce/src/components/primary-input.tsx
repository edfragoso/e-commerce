import { InputHTMLAttributes } from "react";
import { InputContainer, PrimaryInput } from "./Styles/styledPrimary-input";
import { SearchIcon } from "./icons/search-icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}
