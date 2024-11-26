import { Container, Modal } from "@mui/material";
import { PropsWithChildren } from "react";

interface IModalCompProps extends PropsWithChildren {
  open: boolean; // Controlled state for modal visibility
  onOpen: () => void; // Function to handle opening
  onClose: () => void; // Function to handle closing
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  //   boxShadow: 24,
  p: 4,
  borderRadius: "10px"
};
const ModalComp = ({ open, onClose, children }: IModalCompProps) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={style} maxWidth="sm">
          {children}
        </Container>
      </Modal>
    </>
  );
};

export default ModalComp;
