import { Box, FormLabel, Grid2 } from "@mui/material";
import s from "./priceForm.module.scss";
import PriceSlider from "../priceSlider";
import SearchInput from "../searchInput";
import SelectInput, { SelectViewType } from "../selectInput";

const selectOptions = [
  {
    value: "NOW",
    name: "NOW",
  },
  {
    value: "California Gold Nutrition",
    name: "California Gold Nutrition",
  },
  {
    value: "MUSCLETECH",
    name: "MUSCLETECH",
  },
  {
    value: "Olimp Sport Nutrition",
    name: "Olimp Sport Nutrition",
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
      <Box className={s.fieldset}>
        <Grid2 container direction="column" columns={24} spacing={2}>
          <Grid2 size={24}>
            <SelectInput
              label="Бренд"
              options={selectOptions}
              viewType={SelectViewType.Common}
            />
          </Grid2>
          <Grid2 size={24}>
            <FormLabel component="h3">Фильтры</FormLabel>
            <Box><PriceSlider values={[0, 1000]}/></Box>
          </Grid2>
          <Grid2 size={24}>
            <FormLabel component="h3">Поиск по артикулу</FormLabel>
            <Box>
              <SearchInput />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default PriceForm;
