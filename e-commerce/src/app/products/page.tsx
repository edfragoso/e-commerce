"use client";

import { DefaultPageLayout } from "@/components/Styles/styledDefaultPageLayout";
import { Cointainer, ProductInfo } from "./style/styledProdutcs";
import { BackButtonIcon } from "@/components/backButton";
import { useProduct } from "@/hooks/useProduct";
import { formatValue } from "@/utils/formatPrice";
import { shopBagIcon } from "@/components/icons/shopping-bag-icon";

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  const handleAddToCard = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);
      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({...data, quantity: 1, id: searchParams.id });
      }
      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      let newCart = [{...data, quantity: 1, id: searchParams.id},
      ];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
    alert("Item adicionado ao carrinho")
    window.location.reload();
  };
  return (
    <DefaultPageLayout>
      <Cointainer>
        <BackButtonIcon navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatValue(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCard}>
              {shopBagIcon()}
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Cointainer>
    </DefaultPageLayout>
  );
}
