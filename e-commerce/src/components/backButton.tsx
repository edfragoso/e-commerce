"use client"
import { useRouter } from "next/navigation";
import { Button } from "./Styles/styledBackButton";
import { BackIcon } from "./icons/Back-icon";

interface ButtonProps {
  navigate: string;
}

export function BackButtonIcon({ navigate }: ButtonProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      voltar
    </Button>
  );
}
