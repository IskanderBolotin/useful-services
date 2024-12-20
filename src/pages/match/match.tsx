import { Grid2 } from "@mui/material";
import { ProductSelectLong, ProductShort } from "entities/product";
import MatchNavigateBar from "shared/ui/matchNavigateBar";
import SortingMatchList from "shared/ui/sortingMatchList";

const Match: React.FC = () => {
  return (
    <div className="container">
      <MatchNavigateBar />
      <Grid2 container spacing={2} columns={4}>
        <Grid2 size={1}>
          <ProductShort />
        </Grid2>
        <Grid2 size={3}>
          <SortingMatchList />
          <Grid2 container spacing={3} columns={4} direction="column">
            <Grid2 size={4}>
              <ProductSelectLong />
            </Grid2>
            <Grid2 size={4}>
              <ProductSelectLong />
            </Grid2>
            <Grid2 size={4}>
              <ProductSelectLong />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Match;
