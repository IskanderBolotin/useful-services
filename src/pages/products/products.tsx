import { ProductList } from "widgets/matchProducts";
import { SelectMarketplace } from "widgets/selectMarketplace";
import { Box, Grid2, Stack } from "@mui/material";
import CheckboxFilter from "shared/ui/checkboxFilter";
import PriceForm from "shared/ui/priceForm";
import InfoForm from "shared/ui/infoForm";
import WarningText from "shared/ui/warningText";
import { isDefinedArray } from "shared/lib/isDefined";
import SortingList from "shared/ui/sortingList";
import AddButton from "shared/ui/addButton";

const data = [
  {
    image: "",
    name: "Гайковерт аккумуляторный",
    marketpalce: "Wildberies",
    article: "237974322",
    status: "Хорошо",
    price: "6 616",
    match: "120/250",
    successRate: "80",
    description:
      "Гайковерт аккумуляторный ударный TomTech — это надежный помощник для выполнения сложных задач, будь то работа в гараже, на стройке или дома. Этот инструмент оснащен бесщеточным двигателем мощностью 450 Вт, что обеспечивает высокую производительность и свободу движений. С крутящим моментом до 1100 Нм и четырьмя режимами работы, гайковерт справляется с самыми сложными крепежами и материалами, даже когда дело касается крупных болтов.  Особенностью этого ",
  },
  {
    image: "",
    name: "Гайковерт аккумуляторный",
    marketpalce: "Wildberies",
    article: "237974322",
    status: "Хорошо",
    price: "6 616",
    match: "120/250",
    successRate: "80",
    description:
      "Гайковерт аккумуляторный ударный TomTech — это надежный помощник для выполнения сложных задач, будь то работа в гараже, на стройке или дома. Этот инструмент оснащен бесщеточным двигателем мощностью 450 Вт, что обеспечивает высокую производительность и свободу движений. С крутящим моментом до 1100 Нм и четырьмя режимами работы, гайковерт справляется с самыми сложными крепежами и материалами, даже когда дело касается крупных болтов.  Особенностью этого ",
  },
  {
    image: "",
    name: "Гайковерт аккумуляторный",
    marketpalce: "Wildberies",
    article: "237974322",
    status: "Хорошо",
    price: "6 616",
    match: "120/250",
    successRate: "80",
    description:
      "Гайковерт аккумуляторный ударный TomTech — это надежный помощник для выполнения сложных задач, будь то работа в гараже, на стройке или дома. Этот инструмент оснащен бесщеточным двигателем мощностью 450 Вт, что обеспечивает высокую производительность и свободу движений. С крутящим моментом до 1100 Нм и четырьмя режимами работы, гайковерт справляется с самыми сложными крепежами и материалами, даже когда дело касается крупных болтов.  Особенностью этого ",
  },
  {
    image: "",
    name: "Гайковерт аккумуляторный",
    marketpalce: "Wildberies",
    article: "237974322",
    status: "Хорошо",
    price: "6 616",
    match: "120/250",
    successRate: "80",
    description:
      "Гайковерт аккумуляторный ударный TomTech — это надежный помощник для выполнения сложных задач, будь то работа в гараже, на стройке или дома. Этот инструмент оснащен бесщеточным двигателем мощностью 450 Вт, что обеспечивает высокую производительность и свободу движений. С крутящим моментом до 1100 Нм и четырьмя режимами работы, гайковерт справляется с самыми сложными крепежами и материалами, даже когда дело касается крупных болтов.  Особенностью этого ",
  },
];

export const Products: React.FC = () => {
  const isDataLoading = isDefinedArray(data);

  return (
    <div className="container">
      <Grid2 container spacing={2} columns={25}>
        <Grid2 size={9} component="aside">
          <Stack>
            <Box>
              <SelectMarketplace />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <InfoForm />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <CheckboxFilter />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <PriceForm />
            </Box>
          </Stack>
        </Grid2>
        <Grid2 size={16} component="main">
          <Box sx={{ mb: 2 }}>
            <AddButton />
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <SortingList />
          </Box>
          {isDataLoading ? <ProductList data={data} /> : <WarningText />}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Products;
