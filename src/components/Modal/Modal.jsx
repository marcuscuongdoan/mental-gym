function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? "Modal" : "Modal hide";

  const handleOutsideClick = (e) => {
    console.log(e);
    show = false;
    console.log(showHideClassName);
    // if (!e.contains(e.target)) this.handleClose();
  };

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="content">{children}</div>
    </div>
  );
}

export default Modal;
