import Modal from '@mui/material/Modal';
import s from "./loadYourProductModal.module.scss";
import FileInput from '../fileInput';
import { Box } from '@mui/material';

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
        <FileInput/>
      </Box>
    </Modal>
  )
};

export default LoadYourProductModal;