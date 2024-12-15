import { useNavigate } from "react-router";
import CustomButton, { ButtonViewType } from "../customButton";
import Icon from "./images/arrow-left-icon.svg?react";
import { AppPath } from "shared/config";
import s from "./homeButton.module.scss";

const HomeButton: React.FC = () => {
  let navigate = useNavigate();
  
  const buttonHandler = () => {
    navigate(-1);
  }

  return (
    <CustomButton buttonViewType={ButtonViewType.PrimaryBorder} icon={Icon} iconGap={10} handler={buttonHandler}>
      Вернуться назад
    </CustomButton>
  )
};

export default HomeButton;