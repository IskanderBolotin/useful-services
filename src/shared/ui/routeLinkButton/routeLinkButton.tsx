import { Link } from "react-router";
import CustomButton, { CustomButtonProps } from "../customButton";
import s from "./routeLinkButton.module.scss";

const defaultElement = "span";

type RouteLinkButtonProps = {
  to: string;
} & CustomButtonProps<typeof defaultElement>;

const RouteLinkButton: React.FC<React.PropsWithChildren<RouteLinkButtonProps>> = ({ to, children, ...customButtonProps }) => {
  return (
    <Link to={to} className={s.link}>
      <CustomButton {...customButtonProps} as={defaultElement}>
        {
          children
        }
      </CustomButton>
    </Link>
  )
};

export default RouteLinkButton;