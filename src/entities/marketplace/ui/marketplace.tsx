import CustomButton, { ButtonViewType } from "shared/ui/customButton";
import { MarketplaceType } from "../model/marketplace";
import cn from "classnames";
import s from "./marketplace.module.scss";
import { isDefinedFn } from "shared/lib/isDefined";

type MarketplaceProps = {
  data: MarketplaceType;
  handler?: (id: number) => void;
};

const Marketplace: React.FC<MarketplaceProps> = ({ data, handler }) => {
  const { id, name } = data;

  const getDataHandler = () => {
    if (isDefinedFn(handler)) {
      handler(id);
    }
  };

  return (
    <CustomButton buttonViewType={ButtonViewType.Primary} handler={getDataHandler} className={cn(s.marketplace, s.important)}>
      { name }
    </CustomButton>
  )
};

export default Marketplace;