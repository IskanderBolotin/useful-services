import { Navigate, useLocation } from "react-router";
import { AppPath } from "shared/config";

const Main: React.FC = () => {
  let location = useLocation();

  return (
    <Navigate to={AppPath.Products} state={{ from: location }} replace />
  )
};

export default Main;