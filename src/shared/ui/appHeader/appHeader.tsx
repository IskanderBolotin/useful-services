import BalanceInfo from "../balanceInfo";
import HomeButton from "../homeButton";
import s from "./appHeader.module.scss";

const AppHeader: React.FC = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <HomeButton />
          <div className={s.balance}>
            <BalanceInfo />
          </div>
        </div>
      </div>
    </header>
  )
};
export default AppHeader;