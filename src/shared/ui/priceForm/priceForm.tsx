import { Box, FormControl, FormLabel } from "@mui/material";
import s from "./priceForm.module.scss";
import PriceSlider from "../priceSlider";
import SearchInput from "../searchInput";

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