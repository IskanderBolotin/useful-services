import { Grid2 } from "@mui/material";
import BalanceInfo from "../balanceInfo";
import HomeButton from "../homeButton";
import s from "./appHeader.module.scss";

const AppHeader: React.FC = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <Grid2 container spacing={1} justifyContent="space-between" alignItems="baseline">
          <Grid2>
            <HomeButton />
          </Grid2>
          <Grid2>
            <div className={s.balance}>
              <BalanceInfo />
            </div>
          </Grid2>
        </Grid2>
      </div>
    </header>
  );
};
export default AppHeader;
