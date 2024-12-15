import { useState } from "react";
import ChangeMarketplaceButton from "../changeMarketplaceButton";
import MarketplaceList from "../marketplaceList";
import { isDefinedNumber } from "shared/lib/isDefined";
import s from "./selectMarketplace.module.scss";

const data = [
  {
    id: 10,
    name: "ozon",
    code: "ozon"
  },
  {
    id: 11,
    name: "Яндекс маркет",
    code: "yandex-market"
  },
  {
    id: 12,
    name: "wildberries",
    code: "wildberries"
  },
  {
    id: 13,
    name: "мега маркет",
    code: "mega-market"
  },
];

export const SelectMarketplace: React.FC = () => {
  const [selectItemId, setSelectedItemId] = useState<number>();
  const isItemSelect = isDefinedNumber(selectItemId);

  const changeHandler = () => {
    setSelectedItemId(undefined);
  };
  const marketplaceHandler = (id: number) => {
    setSelectedItemId(id);
  };

  return (
    <div className={s.wrapper}>
      <MarketplaceList data={data} currentItemId={selectItemId} selectHandler={marketplaceHandler}/>
      { 
        isItemSelect && 
        <div className={s.button}>
          <ChangeMarketplaceButton handler={changeHandler} /> 
        </div>
      }
    </div>
  )
};