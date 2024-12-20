import { Box, Grid2 } from "@mui/material";
import Image from "./images/image.jpg";
import CustomButton, { ButtonViewType } from "shared/ui/customButton";
import s from "./productSelectLong.module.scss";
import { Link } from "react-router";
import { AppPath } from "shared/config";

const ProductSelectLong: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Grid2 container columns={24} spacing={4} direction="column">
        <Grid2 size={24}>
          <Grid2 container columns={24} alignItems="center" spacing={1}>
            <Grid2 size={16}>
              <Grid2 container columns={24} spacing={9}>
                <Grid2 size={8}>
                  <div className={s.picture}>
                    <img src={Image} alt="" />
                  </div>
                </Grid2>
                <Grid2 size={8}>
                  <div className={s.picture}>
                    <img src={Image} alt="" />
                  </div>
                </Grid2>
                <Grid2 size={8}>
                  <div className={s.picture}>
                    <img src={Image} alt="" />
                  </div>
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2 size={8}>
              <Box
                sx={{ width: "300px", maxWidth: "100%", margin: "0 auto 24px" }}
              >
                <CustomButton
                  buttonViewType={ButtonViewType.Primary}
                  style={{ width: "100%" }}
                >
                  Подтвердить
                </CustomButton>
              </Box>
              <Box sx={{ width: "300px", maxWidth: "100%", margin: "0 auto" }}>
                <CustomButton
                  buttonViewType={ButtonViewType.CommonWarning}
                  style={{ width: "100%" }}
                >
                  Удалить
                </CustomButton>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={24}>
          <Box sx={{ maxWidth: "1020px" }}>
            <Grid2
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Grid2>
                <Box sx={{ color: "#2b9b29" }}>
                  <span className={s.nameProp}>Цена: </span>
                  <span className={s.valueProp}>6 616</span>
                </Box>
              </Grid2>
              <Grid2>
                <Box sx={{ color: "#3144B1" }}>
                  <span className={s.nameProp}>Vendor код: </span>
                  <span className={s.valueProp}>237974322</span>
                </Box>
              </Grid2>
              <Grid2>
                <Box>
                  <span className={s.name}>Гайковерт аккумуляторный</span>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
        <Grid2 size={24}>
          <Box sx={{ maxWidth: "1020px" }}>
            <Grid2
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
              sx={{ color: "#6d32b8" }}
            >
              <Grid2>
                <span className={s.propInfo}>Wildberies</span>
              </Grid2>
              <Grid2>
                <span className={s.propInfo}>Бренд: TomTech </span>
              </Grid2>
              <Grid2>
                <span className={s.propInfo}>Продавец: TomTech </span>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
        <Grid2 size={24}>
          <Link to={AppPath.Index}>
            <span className={s.link}>Подробнее...</span>
          </Link>
        </Grid2>
      </Grid2>
    </div>
  );
};

export { ProductSelectLong };
