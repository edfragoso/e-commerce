import { useLocalStorage } from "@/hooks/useLocalstorage";
import { CartIcon } from "./icons/cart-icon";
import { CartCount, Container } from "./Styles/styledCartControl";

export function CartControl() {
    const { value } = useLocalStorage("cart-items", []); 
    return (
      <Container>
        <CartIcon />
        {value.length > 0 && <CartCount>{value.length}</CartCount>} 
      </Container>
  );
}
