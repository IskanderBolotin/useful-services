import { Grid2 } from "@mui/material";
import CustomButton from "../customButton";
import s from "./sortingList.module.scss";
import { useState } from "react";

const data = [
  {
    id: "new",
    name: "Новые",
  },
  {
    id: "last",
    name: "Последний матч",
  },
  {
    id: "low",
    name: "Низкий матч",
  },
  {
    id: "brand",
    name: "По бренду",
  },
  {
    id: "price",
    name: "По цене",
  },
  {
    id: "success",
    name: "По успеху",
  },
];
const SortingList: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<string>();

  const clickHandler = (id: string) => {
    setCurrentSort(id)
  };

  return (
    <>
      <div className={s.title}>Сортировать</div>
      <div className={s.wrapper}>
        <Grid2 container spacing={2} wrap="nowrap" columns={12}>
          {data.map((item) => {
            const {name, id} = item;
            const isSelect = currentSort === id;
            return (
              <Grid2 size={12} sx={{ minWidth: "auto" }} key={id}>
                <CustomButton style={{ whiteSpace: "nowrap" }} isActive={isSelect} handler={() => clickHandler(id)}>
                  {
                    name
                  }
                </CustomButton>
              </Grid2>
            );
          })}
        </Grid2>
      </div>
    </>
  );
};

export default SortingList;
