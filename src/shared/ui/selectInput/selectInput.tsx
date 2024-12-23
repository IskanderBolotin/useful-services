import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { Typography } from "@mui/material";
import Icon from "./images/arrow-down-icon.svg?react";
import { SelectOptionsType, SelectViewType } from "./type";

const CustomTextCommon = styled(InputBase)(() => ({
  width: "100%",
  "& .MuiInputBase-input": {
    backgroundColor: "transparent",
    color: "#fefefe",
    fontWeight: 700,
    borderRadius: "10px",
    padding: "4px 0px",
    border: "none",
    height: "32px",
    textAlign: "left",
    boxSizing: " border-box",
  },
}));

const CustomTextPrimary = styled(InputBase)(() => ({
  width: "100%",
  "& .MuiInputBase-input": {
    backgroundColor: "#6d32b8",
    color: "#fefefe",
    fontWeight: 700,
    borderRadius: "10px",
    padding: "8px 24px",
    borederRadius: "10px",
    border: "none",
    height: "auto",
    textAlign: "left",
    boxSizing: " border-box",
  },
  "& .MuiSelect-icon": {
    top: "calc(50% - 5px)",
  }
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  padding: "8px 16px",
  backgroundColor: "#6d32b8",
  color: "#fefefe",
  fontWeight: 700,
  "&:first-child": {
    borderRadius: "10px 10px 0 0",
  },
  "&:last-child": {
    borderRadius: "0 0 10px 10px",
  },
  "&:not(:last-child)": {
    borderBottom: "1px solid #fefefe",
  },
  "&:hover": {
    color: "#6d32b8",
    backgroundColor: "#fefefe",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#6d32b8",
    color: "#fefefe",
    "&:hover": {
      color: "#6d32b8",
      backgroundColor: "#fefefe",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#9463d4",
    "&.Mui-focusVisible": {
      backgroundColor: "#9463d4",
      "&:hover": {
        color: "#6d32b8",
        backgroundColor: "#fefefe",
      },
    },
    "&:hover": {
      color: "#6d32b8",
      backgroundColor: "#fefefe",
    },
  },
}));

type SelectInputProps = {
  options: SelectOptionsType[];
  label: string;
  viewType?: SelectViewType;
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  viewType = SelectViewType.Common,
}) => {
  const [selectValue, setSelectValue] = useState<string>();
  
  const handleChange = (event: { target: { value: string } }) => {
    console.log("target", event.target);
    setSelectValue(event.target.value);
  };

  const renderInput = () => {
    switch (viewType) {
      case SelectViewType.Common:
        return <CustomTextCommon />;
      case SelectViewType.Primary:
        return <CustomTextPrimary />;
    }
  };

  return (
    <Select
      value={selectValue}
      onChange={handleChange}
      displayEmpty
      input={renderInput()}
      IconComponent={Icon}
      renderValue={(value: any) => {
        if (!value) {
          return (
            <Typography
              sx={{
                color: "#fefefe",
                fontWeight: 700,
              }}
            >
              {label}
            </Typography>
          );
        }
        return selectValue;
      }}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        sx: {
          background: "rgba(0, 0, 0, 0.25)",
          "& .MuiMenu-paper": {
            borderRadius: "0px",
            background: "transparent",
            minWidth: "250px !important",
          },
        },
        MenuListProps: {
          sx: {
            padding: 0,
            background: "transparent",
          },
        },
      }}
    >
      {options.map((option) => {
        return (
          <CustomMenuItem value={option.value} key={option.value}>{option.name}</CustomMenuItem>
        );
      })}
    </Select>
  );
};

export default SelectInput;
