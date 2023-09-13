"use client";
import { DefaultPageLayout } from "@/components/Styles/styledDefaultPageLayout";
import {
  CardList,
  CartListContainer,
  CartResultContainer,
  Container,
  ShopBtn,
  TotalItem,
} from "./style/styleCart";
import { BackButtonIcon } from "@/components/backButton";
import { useLocalStorage } from "@/hooks/useLocalstorage";
import { ProductInCart } from "@/types/products";
import { formatValue } from "@/utils/formatPrice";
import { CartItem } from "@/components/cart/page";
import { Item } from "@/components/cart/style/styleCartItem";
import { Divider } from "@/components/Styles/styledDivider";

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  const calcTot = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTot = formatValue(calcTot(value));
  const delivery = 4000;
  const TotWithDelivery = formatValue(calcTot(value) + delivery);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });

    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButtonIcon navigate={"/"} />
          <h3>Seu Carrinho</h3>
          <p>
            Total {value.length} produtos:
            <span> {cartTot} </span>
          </p>
          <CardList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            ))}
          </CardList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido </h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produto</p>
            <p>{cartTot}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
         <p>{formatValue(delivery)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold={true}>
            <p>Total</p>
            <p>{TotWithDelivery}</p>
          </TotalItem>
          <ShopBtn>Finalizar Compra</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
