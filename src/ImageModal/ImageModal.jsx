import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, url, alt }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img className={css.img} src={url} alt={alt} />
    </ReactModal>
  );
}
