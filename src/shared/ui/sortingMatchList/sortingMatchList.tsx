import { useState } from "react";
import { Grid2 } from "@mui/material";
import CustomButton from "../customButton";
import s from "./sortingMatchList.module.scss";

const data = [
  {
    id: "new",
    name: "Новые (159)",
  },
  {
    id: "last",
    name: "Подтвержденные (52)",
  },
  {
    id: "low",
    name: "Удаленные (59)",
  },
];
const SortingMatchList: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<string>();

  const clickHandler = (id: string) => {
    setCurrentSort(id);
  };

  return (
    <>
      <div className={s.wrapper}>
        <Grid2 container spacing={2} columns={12}>
          {data.map((item) => {
            const { name, id } = item;
            const isSelect = currentSort === id;
            return (
              <Grid2 sx={{ minWidth: "auto" }} key={id}>
                <CustomButton
                  style={{ whiteSpace: "nowrap" }}
                  isActive={isSelect}
                  handler={() => clickHandler(id)}
                >
                  {name}
                </CustomButton>
              </Grid2>
            );
          })}
        </Grid2>
      </div>
    </>
  );
};

export default SortingMatchList;
