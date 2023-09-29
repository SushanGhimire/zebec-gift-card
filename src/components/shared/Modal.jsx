import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

export const Modal = ({
  children,
  show,
  onClose,
  align = "center",
  size = "",
  height = "h-full",
  closeFromBackdrop = true,
  className = "",
}) => {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <div className="fixed inset-0 z-30 overflow-y-auto" onClose={onClose}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => (closeFromBackdrop ? onClose() : "")}
              />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`inline-block relative sm:w-3/4 lg:w-8/12 text-left align-middle transform transition-all bg-white shadow-xl rounded-2xl ${(align =
                  "center" ? "my-4" : "mt-40")} ${
                  size ? size : ""
                } ${height} ${className}`}
              >
                <main className="px-6 py-7">{children}</main>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  );
};
