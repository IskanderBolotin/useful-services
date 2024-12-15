import { ProductType } from "entities/product";
import { ProductMatch } from "entities/product/ui";
import s from "./productList.module.scss";

type ProductListProps = {
  data: ProductType[];
};
const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map((product) => {
        return (
          <li className={s.item}>
            <ProductMatch data={product} />
          </li>
        );
      })}
    </ul>
  );
};

export { ProductList };
