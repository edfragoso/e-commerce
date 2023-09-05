import { InputHTMLAttributes } from "react";
import { InputContainer, PrimaryInput } from "./Styles/styledPrimary-input";
import { SearchIcon } from "./icons/search-icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
