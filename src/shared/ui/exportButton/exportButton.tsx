import CustomButton, { ButtonViewType } from "../customButton";

const ExportButton: React.FC = () => {

  return (
    <>
      <CustomButton
        buttonViewType={ButtonViewType.Common}
      >
        Экспорт в Excel
      </CustomButton>
    </>
  );
};

export default ExportButton;
