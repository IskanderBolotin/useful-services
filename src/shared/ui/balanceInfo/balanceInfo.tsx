import { Grid2 } from "@mui/material";
import CustomButton, { ButtonViewType } from "../customButton";
import s from "./balanceInfo.module.scss";

const BalanceInfo: React.FC = () => {
  return (
    <Grid2 container alignItems="flex-end" spacing={4}>
      <Grid2>
        <CustomButton buttonViewType={ButtonViewType.PrimaryBorder}>Пополнить</CustomButton>
      </Grid2>
      <Grid2>
        <Grid2 container alignItems="flex-end" spacing={1} direction="column" sx={{textAlign: "right" }}>
          <Grid2><div className={s.name}>Баланс</div></Grid2>
          <Grid2><div className={s.price}>360 000</div></Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
};

export default BalanceInfo;