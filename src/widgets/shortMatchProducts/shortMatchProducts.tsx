import { Box } from "@mui/material";
import { ProductSelectShort } from "entities/product/ui";
import s from "./shortMatchProducts.module.scss";

const ShortMatchProducts: React.FC = () => {
  return (
    <div>
      <div className={s.title}>
        Похожие по фото
      </div>
      <Box sx={{ mb: "12px"}}>
        <ProductSelectShort />
      </Box>
      <Box sx={{ mb: "12px"}}>
        <ProductSelectShort />
      </Box>
      <Box sx={{ mb: "12px"}}>
        <ProductSelectShort />
      </Box>
    </div>
  )
};

export default ShortMatchProducts;