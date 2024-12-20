import { Box, FormControl, FormLabel } from "@mui/material";
import s from "./priceForm.module.scss";
import PriceSlider from "../priceSlider";
import SearchInput from "../searchInput";
import SelectInput, { SelectViewType } from "../selectInput";


const selectOptions = [
  {
    value: "NOW",
    name: "NOW"
  },
  {
    value: "California Gold Nutrition",
    name: "California Gold Nutrition"
  },
  {
    value: "MUSCLETECH",
    name: "MUSCLETECH"
  },
  {
    value: "Olimp Sport Nutrition",
    name: "Olimp Sport Nutrition"
  },
];

const PriceForm: React.FC = () => {
  return (
    <Box
      sx={{
        p: "16px 20px",
        borderRadius: "10px",
        bgcolor: "#6d32b8",
      }}
    >
      <FormControl
        className={s.fieldset}
        component="fieldset"
        variant="standard"
      >
        <Box sx={{ marginBottom: "16px"}}>
          <SelectInput label="Бренд" options={selectOptions} viewType={SelectViewType.Common} />
        </Box>
        <FormLabel component="legend">Фильтры</FormLabel>
        <Box sx={{ marginBottom: "24px"}}>
          <PriceSlider values={[0, 1000]}/>
        </Box>
        <FormLabel component="legend">Поиск по артикулу</FormLabel>
        <Box>
          <SearchInput />
        </Box>
      </FormControl>
    </Box>
  )
};

export default PriceForm;