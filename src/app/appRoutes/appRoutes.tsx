import Main from "pages/main";
import Match from "pages/match";
import Products from "pages/products/products";
import { Routes, Route } from "react-router";
import { AppPath } from "shared/config";
import BasicLayout from "shared/ui/basicLayout";

const AppRoutes: React.FC = () => {
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
