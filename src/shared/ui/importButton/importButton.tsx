import { useState } from "react";
import CustomButton, { ButtonViewType } from "../customButton";
import LoadYourProductModal from "../loadYourProductModal";

const ImportButton: React.FC = () => {
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
        buttonViewType={ButtonViewType.Common}
        handler={handleOpen}
      >
        Импорт на матч из файла
      </CustomButton>
      <LoadYourProductModal isOpen={open} handleClose={handleClose} />
    </>
  );
};

export default ImportButton;
