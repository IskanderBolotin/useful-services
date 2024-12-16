import { Typography } from "@mui/material";

const WarningText: React.FC = () => {
  return (
    <>
      <Typography component="p" sx={{color: "#6d32b8", textAlign: "center", margin: 0, fontSize: "32px", lineHeight: "44px", fontWeight: "700"}}>
        Для отображения товаров выберите маркетплейс!
      </Typography>
      <Typography component="p" sx={{color: "#6d32b8", textAlign: "center", margin: 0, fontSize: "28px", lineHeight: "38px", fontWeight: "700"}}>
        Выбор маркетплейса осуществляется в левойм верхнем углу экрана!
      </Typography>
    </>
  );
};

export default WarningText;
