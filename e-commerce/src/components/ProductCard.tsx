import { formatValue } from "@/utils/formatPrice";
import { Card } from "./Styles/styledProducCard";
import { useRouter } from "next/navigation";
import { DividerSpace } from "./divider";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

export function ProductCard(props: ProductCardProps) {
  const price = formatValue(props.price);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/products?id=" + props.id);
  };
  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <DividerSpace />
        <p>{price}</p>
      </div>
    </Card>
  );
}
