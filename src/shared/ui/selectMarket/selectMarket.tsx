import { Grid2 } from "@mui/material";
import s from "./selectMarket.module.scss";
import SelectInput, { SelectViewType } from "../selectInput";

const selectOptions = [
  {
    value: "Озон",
    name: "Озон"
  },
  {
    value: "WB",
    name: "WB"
  },
  {
    value: "Яндекс Маркет ",
    name: "Яндекс Маркет "
  },
  {
    value: "МегаМаркет",
    name: "МегаМаркет"
  },
];

const SelectMarket: React.FC = () => {
  return (
    <Grid2 container spacing={1} justifyContent="space-between" alignItems="center">
      <Grid2>
        <div className={s.title}>Выберите маркет:</div>
      </Grid2>
      <Grid2>
        <SelectInput label="Выбрать" options={selectOptions} viewType={SelectViewType.Primary} />
      </Grid2>
    </Grid2>
  );
};

export default SelectMarket;
