import { Box, Grid2 } from "@mui/material";
import s from "./infoForm.module.scss";

const InfoForm: React.FC = () => {
  return (
    <Box
      sx={{
        p: "16px 20px",
        borderRadius: "10px",
        bgcolor: "#6d32b8",
      }}
    >
      <Grid2 container alignItems="baseline" justifyContent="space-between">
        <Grid2>
          <span className={s.prop}>Товаров добавлено:</span>
        </Grid2>
        <Grid2>
          <span className={s.value}>5326</span>
        </Grid2>
      </Grid2>
      <Grid2
        container
        alignItems="baseline"
        justifyContent="space-between"
        sx={{ marginTop: "16px" }}
      >
        <Grid2>
          <span className={s.prop}>Конкурентов найдено:</span>
        </Grid2>
        <Grid2>
          <span className={s.value}>5757657657</span>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default InfoForm;
