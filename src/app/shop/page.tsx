import Link from "next/link";
import Container from "../../components/Container";
import ProductItem, {
  IProductType,
} from "../../components/Product/ProductItem";
import axios from "axios";
import ShopFilter from "../../components/Shop/ShopFilter";

export default async function Shop() {
  const data = await axios.get("http://localhost:3000/products");
  const products = (await data.data) as IProductType[];
  return (
    <Container>
      <ShopFilter />
      <div className="grid grid-cols-4 gap-16">
        {products &&
          products.map((product, index) => (
            <Link href={`shop/${product.id}`} key={index}>
              <ProductItem {...product} />
            </Link>
          ))}
      </div>
    </Container>
  );
}
