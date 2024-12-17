import { useState } from "react";
import { Grid2, styled, Input, Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import s from "./priceSlider.module.scss";

const CustomSlider = styled(Slider)(() => ({
  color: "#ffffff",
  height: 6,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#ffffff",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "0 0 0 8px rgba(109, 50, 184, 0.16)",
    },
  },
  "& .MuiSlider-track": {
    height: 6,
  },
  "& .MuiSlider-rail": {
    color: "#ffffff",
    opacity: 1,
    height: 6,
  },
}));

const CustomText = styled(Input)(() => ({
  width: "160px",
  border: "none",
  "&::before, &::after": {
    display: "none",
  },
  "& input": {
    backgroundColor: "#fefefe",
    color: "#6d32b8",
    fontWeight: 700,
    textAlign: "center",
    borderRadius: "10px",
    padding: "4px 16px",
    border: "none",
  },
}));

type PriceSliderType = {
  values: number[];
};

const PriceSlider: React.FC<PriceSliderType> = ({ values }) => {
  const [value, setValue] = useState<number[]>(values);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <CustomSlider
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange} 
        min={values[0]}
        max={values[1]}
      />
       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setValue((prev) => [values[0], prev[1]])}
          sx={{ cursor: 'pointer' }}
        >
          <span className={s.textSmall}>
            {values[0]}
          </span>
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setValue((prev) => [prev[0], values[1]])}
          sx={{ cursor: 'pointer' }}
        >
          <span className={s.textSmall}>
            {values[1]}
          </span>
        </Typography>
      </Box>
      <Grid2
        container
        spacing={3}
        sx={{ flexGrow: 1, marginTop: "12px" }}
        justifyContent="space-between"
      >
        <Grid2>
          <Grid2 container alignItems="center">
            <Grid2 sx={{ marginRight: "16px" }}>
              <span className={s.text}>От</span>
            </Grid2>
            <Grid2>
              <CustomText
                id="price-min"
                type="number"
                value={value[0]}
                onChange={(e) => {
                  setValue((prev) => [+e.target.value, prev[1]]);
                }}
              />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 offset="auto">
          <Grid2 container alignItems="center">
            <Grid2 sx={{ marginRight: "16px" }}>
              <span className={s.text}>До</span>
            </Grid2>
            <Grid2>
              <CustomText
                id="price-max"
                type="number"
                value={value[1]}
                onChange={(e) => {
                  setValue((prev) => [prev[0], +e.target.value]);
                }}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default PriceSlider;
