import { Input, styled } from "@mui/material";
import s from "./commonTextInput.module.scss";

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
    textAlign: "center",
    borderRadius: "10px",
    padding: "4px 16px",
    fontSize: "20px",
    border: "2px solid #6d32b8",
    height: "48px",
    ["box-sizing"]: "border-box",
    ["text-align"]: "left",
    "&::placeholder": {
      opacity: 1,
      color: "#6d6d6d",
    },
  },
}));

const CommonTextInput: React.FC = () => {
  return (
    <>
      <div className={s.title}>Или введите ссылку на товар</div>
      <CustomText type="text" placeholder="Ссылка" />
    </>
  );
};

export default CommonTextInput;
