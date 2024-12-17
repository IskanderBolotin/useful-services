import { Box, Grid2 } from "@mui/material";
import Image from "./images/image.jpg";
import s from "./productShort.module.scss";
import { Link } from "react-router";
import { AppPath } from "shared/config";

const ProductShort: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Мой товар</div>
      <Box sx={{ mb: "12px" }}>
        <div className={s.picture}>
          <img src={Image} alt="" />
        </div>
      </Box>
      <Grid2
        container
        justifyContent="space-between"
        sx={{ mb: "12px", color: "#2b9b29" }}
      >
        <Grid2>
          <span className={s.nameProp}>Цена</span>
        </Grid2>
        <Grid2>
          <span className={s.valueProp}>6 616</span>
        </Grid2>
      </Grid2>
      <Box sx={{ mb: "12px", color: "#3144B1" }}>
        <span className={s.nameProp}>Vendor код: </span>
        <span className={s.valueProp}>237974322</span>
      </Box>
      <Box sx={{ mb: "12px" }}>
        <span className={s.name}>Гайковерт аккумуляторный</span>
      </Box>
      <Grid2 container sx={{ mb: "12px", color: "#6d32b8" }} spacing={1}>
        <Grid2>
          <span className={s.propInfo}>Wildberies</span>
        </Grid2>
        <Grid2>
          <span className={s.propInfo}>Бренд: TomTech </span>
        </Grid2>
      </Grid2>
      <Link to={AppPath.Index}>
        <span className={s.link}>Подробнее...</span>
      </Link>
    </div>
  );
};

export { ProductShort };
