import { useLocalStorage } from "@/hooks/useLocalstorage";
import { CartIcon } from "./icons/cart-icon";
import { CartCount, Container } from "./Styles/styledCartControl";

export function CartControl() {
    const { value } = useLocalStorage("cart-item", []); // Substitua [] pelo valor inicial apropriado
    return (
      <Container>
        <CartIcon />
        {value.length && <CartCount>{value.length}</CartCount>} {/* Correção na propriedade length */}
      </Container>
  );
}
