import { matchRoutes, useLocation } from "react-router";
import { ButtonViewType } from "../customButton";
import Icon from "./images/arrow-left-icon.svg?react";
import { useMemo } from "react";
import { AppPath } from "shared/config";
import { isDefinedArray, isDefinedString } from "shared/lib/isDefined";
import RouteLinkButton from "../routeLinkButton";

const HomeButton: React.FC = () => {
  const location = useLocation();

  const currentPage = useMemo(() => {
    const match =
      matchRoutes(
        Object.values(AppPath).map((item) => ({ path: item })),
        location
      )?.map((item) => item.route.path as AppPath) ?? [];

    if (!isDefinedArray(match)) {
      return {
        to: "",
        name: "",
      };
    }

    switch (match[0]) {
      case AppPath.Index:
        return {
          to: "",
          name: "",
        };
      case AppPath.Products:
        return {
          to: AppPath.Index,
          name: "Вернуться на главную",
        };
      case AppPath.Match:
        return {
          to: AppPath.Products,
          name: "Вернуться к списку товаров",
        };
    }
  }, [location]);

  if (!isDefinedString(currentPage.name)) {
    return <div></div>;
  }

  return (
    <RouteLinkButton
      buttonViewType={ButtonViewType.PrimaryBorder}
      to={currentPage.to}
      icon={Icon}
      iconGap={10}
    >
      {currentPage.name}
    </RouteLinkButton>
  );
};

export default HomeButton;
