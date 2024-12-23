import { useState } from "react";
import { Input, styled } from "@mui/material";
import Icon from "./images/search-icon.svg?react";
import s from "./searchInput.module.scss";

const CustomText = styled(Input)(() => ({
  width: "100%",
  border: "none",
  textAlign: "left",
  "&::before, &::after": {
    display: "none",
  },
  "& input": {
    backgroundColor: "#fefefe",
    color: "#6d32b8",
    fontWeight: 700,
    borderRadius: "10px",
    padding: "4px 16px",
    border: "none",
    textAlign: "left"
  },
}));

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={s.wrapper}>
      <CustomText
        id="search"
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className={s.button}>
        <Icon />
      </button>
    </div>
  );
};

export default SearchInput;
