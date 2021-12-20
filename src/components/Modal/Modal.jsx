function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? "Modal" : "Modal hide";

  function handleClickOutside(e) {
    if (e.target.className.includes("Modal"))
      // if (!e.target.contains(document.getElementsByClassName("content"))) {
      handleClose();
    // }
  }

  return (
    <div className={showHideClassName} onClick={handleClickOutside}>
      <div className="content">{children}</div>
    </div>
  );
}

export default Modal;
