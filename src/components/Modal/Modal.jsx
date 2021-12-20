function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? "Modal" : "Modal hide";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="content">{children}</div>
    </div>
  );
}

export default Modal;
