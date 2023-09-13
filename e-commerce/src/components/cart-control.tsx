import { useLocalStorage } from "@/hooks/useLocalstorage";
import { CartIcon } from "./icons/cart-icon";
import { CartCount, Container } from "./Styles/styledCartControl";
import { useRouter } from "next/navigation";

export function CartControl() {
    const { value } = useLocalStorage("cart-items", []);
    const router = useRouter();
    
    const handleNavigateToCart = () => {
      router.push('/cart')
    } 
    return (
      <Container onClick={handleNavigateToCart}>
        <CartIcon />
        {value.length > 0 && <CartCount>{value.length}</CartCount>} 
      </Container>
  );
}
