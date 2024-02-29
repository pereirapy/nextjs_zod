import { ReactNode } from 'react';

type ModalProps = {
  title: string | ReactNode;
  body: string | ReactNode;
  setClose: () => void;
};

const Modal = ({ title, body, setClose }: ModalProps) => {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <div className="text-2xl font-bold">{title}</div>
            <div className="modal-close cursor-pointer z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18">
                <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" />
              </svg>
            </div>
          </div>

          {body}

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setClose()}
              className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
