import Modal from "components/Modal/Modal";

const Registration = ({ closeModal, title, text }) => {
  return (
    <Modal closeModal={closeModal} title={title} text={text}>
      Registration
    </Modal>
  );
};

export default Registration;
