import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Modal = ({ children, title = "Modal Title", closeModal }) => {
  const modalVar = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 40,
      opacity: 0,
    },
  };
  const overlay = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <>
      <div className="fixed inset-0 z-50 pb-4">
        <motion.div
          variants={overlay}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={closeModal}
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
        ></motion.div>
        <motion.div
          variants={modalVar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative bg-lightbg rounded-xl w-[90%] md:w-[480px] mx-auto my-[5em] p-8 pt-10 border border-stroke z-[999]"
        >
          <div
            onClick={closeModal}
            className="cursor-pointer absolute top-3 right-3 p-2 border-[3px] border-stroke rounded-xl"
          >
            Esc
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div>{children}</div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func,
};

export default Modal;
