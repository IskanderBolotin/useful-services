import { Box, Grid2 } from "@mui/material";
import Image from "./images/image.jpg";
import s from "./productSelectShort.module.scss";
import CustomButton, { ButtonViewType } from "shared/ui/customButton";

const ProductSelectShort: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Box sx={{ mb: "16px" }}>
        <div className={s.picture}>
          <img src={Image} alt="" />
        </div>
      </Box>
      <Box sx={{ mb: "8px" }}>
        <span className={s.name}>Брелок KIA для ключей кожа + металл для авто Киа плетенный</span>
      </Box>
      <Grid2
        container
        justifyContent="space-between"
        sx={{ mb: "12px", }}
      >
        <Grid2>
          <span className={s.nameProp}>Цена</span>
        </Grid2>
        <Grid2>
          <span className={s.valueProp}>6 616</span>
        </Grid2>
      </Grid2>
      <Box sx={{ mb: "16px" }}>
        <CustomButton buttonViewType={ButtonViewType.Primary} style={{ width: "100%"}}>Подтвердить</CustomButton>
      </Box>
      <Box>
        <CustomButton buttonViewType={ButtonViewType.Common} style={{ width: "100%"}}>Удалить</CustomButton>
      </Box>
    </div>
  );
};

export { ProductSelectShort };
