import { Outlet } from "react-router";
import AppHeader from "../appHeader";
import s from "./basicLayout.module.scss";

const BasicLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div className="siteContent">
        <div className={s.inner}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default BasicLayout;