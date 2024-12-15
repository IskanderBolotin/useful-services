import cn from "classnames";
import CustomButton from "shared/ui/customButton";
import s from "./changeMarketplaceButton.module.scss";

type ChangeMarketplaceButtonProps = {
  handler: () => void;
};

const ChangeMarketplaceButton: React.FC<ChangeMarketplaceButtonProps> = ({ handler }) => {
  return (
    <CustomButton handler={handler} className={cn(s.button, s.important)}>Изменить маркет</CustomButton>
  )
};

export default ChangeMarketplaceButton;