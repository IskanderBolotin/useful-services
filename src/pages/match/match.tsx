import { Grid2 } from "@mui/material";
import { ProductShort } from "entities/product";

const Match: React.FC = () => {
  return (
    <div className="container">
      <Grid2 container spacing={2} columns={4}>
        <Grid2 size={1}>
          <ProductShort />
        </Grid2>
        <Grid2 size={3}></Grid2>
      </Grid2>
    </div>
  );
};

export default Match;
