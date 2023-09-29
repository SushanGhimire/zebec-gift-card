import React, { useState } from "react";
import { HeroImg } from "../../../assets/images";
import { Modal } from "../../shared/Modal";
import SignupForm from "./SignupForm";

const HeroSection = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <Modal
        show={modal}
        size="max-w-[562px]"
        closeModal={closeModal}
        className="p-4"
      >
        <SignupForm closeModal={closeModal} />
      </Modal>
      <div className="lg:h-[calc(100vh-95px)] home-hero-gradient web-padding">
        <div className="flex flex-col lg:flex-row h-full text-center lg:text-left">
          {/* left content  */}
          <div className="flex-1 flex flex-col justify-end pb-6 pt-12">
            <h1 className="text-7xl xl:text-[100px] xl:leading-[110px] xl:tracking-[-4px] text-zebec-black">
              The Zebec <br /> Gift Card
            </h1>
            <p className="text-xl xl:text-[25px] xl:leading-[30px] xl:tracking-[-0.25px] mt-3">
              Launching this Fall in select countries*
            </p>
            <p className="text-2xl xl:text-[35px] xl:leading-[35px] xl:tracking-[-1.05px] lg:max-w-sm mt-32">
              Sign up for updates and stay in the know!
            </p>
            <div className="mt-10">
              <button
                className="bg-primary w-[298px] py-[10px] rounded-full text-xl xl:text-[25px] xl:leading-[25px] xl:tracking-[-0.75px]"
                onClick={() => setModal(true)}
              >
                Sign Up
              </button>
            </div>
            <p className="text-xs xl:text-[15px] xl:leading-[17px] xl:tracking-[-0.15px] text-grey-dark mt-10 lg:max-w-[33rem]">
              *Nepal, India, Bangladesh, Pakistan, Singapore, Vietnam, China,
              Hong Kong, Nigeria, Kenya, Argentina
            </p>
          </div>
          {/* right image  */}
          <div className="max-w-[600px] xl:max-w-[700px] 2xl:max-w-[860px] flex justify-end mx-auto lg:mx-0">
            <img
              src={HeroImg}
              alt="zebec card"
              className="w-full rounded-t-full mt-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
