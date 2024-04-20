import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "8px",
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
};

export default function ImageModal({ isOpen, image, onRequestClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      {image && (
        <img
          src={image.url}
          alt={image.alt}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            display: "block",
            margin: "auto",
          }}
        />
      )}
    </ReactModal>
  );
}
