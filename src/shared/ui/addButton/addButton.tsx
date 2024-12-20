import { useState } from "react";
import CustomButton, { ButtonViewType } from "../customButton";
import Icon from "./images/plus-icon.svg?react";
import LoadYourProductModal from "../loadYourProductModal";

const AddButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomButton
        buttonViewType={ButtonViewType.Primary}
        icon={Icon}
        iconGap={8}
        handler={handleOpen}
      >
        Добавить товар
      </CustomButton>
      <LoadYourProductModal isOpen={open} handleClose={handleClose} />
    </>
  );
};

export default AddButton;
