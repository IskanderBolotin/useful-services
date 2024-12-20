import { Grid2, Input, styled } from "@mui/material";
import CustomButton, { ButtonViewType } from "../customButton";
import s from "./fileInput.module.scss";


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
      color: "#6d6d6d"
    }
  },
}));

type FileInpurProps = {
  id?: string;
};

const FileInput: React.FC<FileInpurProps> = ({ id = "file-input" }) => {
  return (
    <div>
      <div className={s.title}>
        Выберите файл
      </div>
      <Grid2 container spacing={2} columns={24}>
        <Grid2 size={16}>
          <div className={s.wrapperInput}>
            <CustomText
              type="text"
              placeholder="Файл"
              tabIndex={-1}
            />
            <label className={s.inputLong} htmlFor={id}></label>
          </div>
        </Grid2>
        <Grid2 size={8}>
          <CustomButton
            as="label"
            buttonViewType={ButtonViewType.Primary}
            htmlFor={id}
            style={{
              width: "100%"
            }}
          >
            Выбрать
          </CustomButton>
        </Grid2>
        <input id={id} type="file" hidden />
      </Grid2>
    </div>
  );
};

export default FileInput;
