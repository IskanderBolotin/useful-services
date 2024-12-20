import { Grid2 } from "@mui/material";
import CustomButton, { ButtonDirection } from "../customButton";
import ArrowLeft from "./images/arrow-left-icon.svg?react";
import ArrowRight from "./images/arrow-right-icon.svg?react";
import s from "./matchNavigateBar.module.scss";

const MatchNavigateBar: React.FC = () => {
  return (
    <Grid2 container spacing={2} sx={{ marginBottom: "10px"}} justifyContent="space-between">
      <Grid2 display="flex" flexDirection="column" alignItems="center">
        <CustomButton iconGap={8} icon={ArrowLeft} style={{ width: "356px" }}>Предыдущая страница</CustomButton>
        <div className={s.productCode}>Vendor код: 29873465876</div>
      </Grid2>
      <Grid2>
        <h1 className={s.title}>Найдено 346 матчей</h1>
      </Grid2>
      <Grid2 display="flex" flexDirection="column" alignItems="center">
        <CustomButton iconGap={8} icon={ArrowRight} direction={ButtonDirection.Right} style={{ width: "356px" }}>Следующая страница</CustomButton>
        <div className={s.productCode}>Vendor код: 29873465876</div>
      </Grid2>
    </Grid2>
  );
};

export default MatchNavigateBar;
