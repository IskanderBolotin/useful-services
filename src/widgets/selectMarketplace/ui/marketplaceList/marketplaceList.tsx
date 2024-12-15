import Marketplace, { MarketplaceType } from "entities/marketplace";
import s from "./marketplaceList.module.scss";
import { isDefined, isDefinedNumber } from "shared/lib/isDefined";

type MarketplaceListProps = {
  data: MarketplaceType[];
  currentItemId?: number;
  selectHandler: (id: number) => void;
};

const MarketplaceList: React.FC<MarketplaceListProps> = ({ data, currentItemId, selectHandler }) => {
  const renderItems = () => {
    if (isDefinedNumber(currentItemId)) {
      const selectedMarketplace = data.find((marketplace) => marketplace.id === currentItemId);
      if (!isDefined(selectedMarketplace)) {
        return <></>
      }
      return (
        <li className={s.item} key={selectedMarketplace.code}>
          <Marketplace data={selectedMarketplace} />
        </li>
      )
    }
    return (
      data.map((marketplace) => {
        const { code } = marketplace;
        return (
          <li className={s.item} key={code}>
            <Marketplace data={marketplace} handler={selectHandler}/>
          </li>
        );
      })
    )
  };

  return (
    <ul className={s.list}>
      {
        renderItems()
      }
    </ul>
  );
};

export default MarketplaceList;
