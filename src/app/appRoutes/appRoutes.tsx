import { Context } from "app/app";
import Main from "pages/main";
import Match from "pages/match";
import Products from "pages/products/products";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import { AppPath } from "shared/config";
import BasicLayout from "shared/ui/basicLayout";

const AppRoutes: React.FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("app_token")) {
      store.checkAuth()
    }
  }, []);

  return (
    <Routes>
      <Route path={AppPath.Index} element={<BasicLayout />}>
        <Route index element={<Main />} />
        <Route path={AppPath.Products} element={<Products />} />
        <Route path={AppPath.Match} element={<Match />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
