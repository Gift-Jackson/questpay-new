import PropTypes from "prop-types";
const Modal = ({ children, title = "Modal Title", closeModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-50">
        <div onClick={closeModal} className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"></div>
        <div className="relative bg-lightbg rounded-xl w-[90%] md:w-[400px] mx-auto mt-[5em] p-8 pt-10 border border-stroke z-[999]">
          <div onClick={closeModal} className="cursor-pointer absolute top-3 right-3 p-2 border-[3px] border-stroke rounded-xl">Esc</div>
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func
};

export default Modal;
