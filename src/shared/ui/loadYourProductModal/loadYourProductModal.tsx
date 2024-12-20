import Modal from '@mui/material/Modal';
import s from "./loadYourProductModal.module.scss";
import FileInput from '../fileInput';
import { Box, Grid2 } from '@mui/material';
import CommonTextInput from '../commonTextInput';
import CustomButton, { ButtonViewType } from '../customButton';
import SelectMarket from '../selectMarket';

type LoadYourProductModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const modalStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"565px",
  padding: "24px",
  borderRadius: "10px",
  backgroundColor: "#fefefe",
  boxShadow: "10px 10px 10px rgba(0, 0, 0, .25)"
};

const LoadYourProductModal: React.FC<LoadYourProductModalProps> = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={{ ...modalStyle}}>
        <h3 className={s.title}>Загрузите ВАШ товар! Товары конкурентов загружаются в другом окне!</h3>
        <Box sx={{mb: "12px"}}>
          <FileInput/>
        </Box>
        <Box sx={{mb: "12px"}}>
          <CommonTextInput />
        </Box>
        <Box sx={{mb: "24px"}}>
          <SelectMarket />
        </Box>
        <Box sx={{mb: "12px"}}>
          <Grid2 container spacing={4} columns={24}>
            <Grid2 size={12}>
              <CustomButton buttonViewType={ButtonViewType.Primary} style={{ width: "100%"}}>Подтвердить</CustomButton>
            </Grid2>
            <Grid2 size={12}>
              <CustomButton style={{ width: "100%"}} handler={handleClose}>Отменить</CustomButton>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Modal>
  )
};

export default LoadYourProductModal;