import { ReactNode } from 'react';
import { HiOutlineXCircle } from 'react-icons/hi2';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-bg_low p-6 rounded-lg shadow-lg w-96">
        <button
          className=" text-gray-500"
          onClick={onClose}
        >
          <HiOutlineXCircle size={30} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
