import { Box, Grid2, Pagination, PaginationItem } from "@mui/material";
import { ProductType } from "entities/product";
import { ProductMatch } from "entities/product/ui";
import PrevIcon from "./images/arrow-left-icon.svg?react";
import NextIcon from "./images/arrow-right-icon.svg?react";
import s from "./productList.module.scss";

type ProductListProps = {
  data: ProductType[];
};
const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <>
      <ul className={s.list}>
        {data.map((product, index) => {
          return (
            <li className={s.item} key={index}>
              <ProductMatch data={product} />
            </li>
          );
        })}
      </ul>
      <Box sx={{ mt: "24px" }}>
        <Grid2 container justifyContent="center">
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: PrevIcon, next: NextIcon }}
                {...item}
              />
            )}
          />
        </Grid2>
      </Box>
    </>
  );
};

export { ProductList };
