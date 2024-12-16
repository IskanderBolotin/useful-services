import { Box, FormControl, FormGroup, FormLabel } from "@mui/material";
import CheckboxForm from "../checkboxForm";
import s from "./checkboxFilter.module.scss";

const CheckboxFilter: React.FC = () => {
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
        <FormLabel component="legend">Сопоставление товаров</FormLabel>
        <FormGroup>
          <CheckboxForm name="manually" label="Вручную" />
          <CheckboxForm name="automatch" label="Автосопоставление" />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default CheckboxFilter;
