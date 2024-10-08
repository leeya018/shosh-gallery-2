import { Fragment, ReactNode } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { observer } from "mobx-react-lite";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

function Modal({ isOpen, closeModal, children }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-[90vw] md:w-[70vw] lg:w-[50vw]  
              max-w-full transform overflow-hidden  bg-card-gradient p-6 text-left align-middle shadow-xl transition-all"
              >
                <div
                  onClick={closeModal}
                  className="absolute top-2 right-2 border-none text-white cursor-pointer text-2xl"
                >
                  X
                </div>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default observer(Modal);
