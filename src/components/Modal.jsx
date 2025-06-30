import './Modal.css';

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;