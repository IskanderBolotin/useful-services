import { ProductList } from "widgets/matchProducts";
import { SelectMarketplace } from "widgets/selectMarketplace";
import { Box, Grid2 } from "@mui/material";
import PriceForm from "shared/ui/priceForm";
import InfoForm from "shared/ui/infoForm";
import WarningText from "shared/ui/warningText";
import { isDefinedArray } from "shared/lib/isDefined";
import SortingList from "shared/ui/sortingList";
import AddButton from "shared/ui/addButton";
import ImportButton from "shared/ui/importButton";
import ExportButton from "shared/ui/exportButton";
import { useContext, useEffect, useState } from "react";
import { Context } from "app/app";
import { observer } from "mobx-react-lite";
import CheckboxFilter from "shared/ui/checkboxFilter";

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

const loadingData = {
  // brand: "",
  // price_from: 0,
  // price_to: 1000,
  // nm_id: 0,
  offset: 10,
  limit: 20,
};

export const Products: React.FC = () => {
  const { store } = useContext(Context);
  const [products, setProducts] = useState<any>();
  const isDataLoading = isDefinedArray(data);

  const loadProducts = async () => {
    const data = await store.loadMyProducts(loadingData);
    console.log(products);
    setProducts(data);
  };

  useEffect(() => {
    loadProducts()
  }, []);

  return (
    <div className="container">
      <Grid2 container spacing={2} columns={25}>
        <Grid2 size={9} component="aside">
          <Grid2 container spacing={3} columns={24} direction="column">
            <Grid2 size={24}>
              <SelectMarketplace />
            </Grid2>
            <Grid2 size={24}>
              <InfoForm />
            </Grid2>
            <Grid2 size={24}>
              <CheckboxFilter />
            </Grid2>
            <Grid2 size={24}>
              <PriceForm />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={16} component="main">
          <Box sx={{ mb: 2 }}>
            <Grid2 container justifyContent="space-between" spacing={1}>
              <Grid2>
                <ExportButton />
              </Grid2>
              <Grid2>
                <ImportButton />
              </Grid2>
              <Grid2>
                <AddButton />
              </Grid2>
            </Grid2>
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

export default observer(Products);
