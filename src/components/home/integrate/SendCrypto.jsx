import React from "react";
import { SendCryptoImg } from "../../../assets/images";

const arrays = [
  [
    {
      title: "Seamless Conversion",
      desc: "Easily convert your digital assets into traditional fiat currency",
    },
    {
      title: "Reduced Volatility Risk",
      desc: "Lock your crypto valuation in a card",
    },
    {
      title: "Gift Giving",
      desc: "Gift crypto as gifts, making cryptocurrency more accessibl to friends and family",
    },
  ],
  [
    {
      title: "Privacy and Security",
      desc: "No sharing of personal information",
    },
    {
      title: "Global Accessibility",
      desc: "Zebec gift cards can be used globally, enabling cross-border transactions without the need for traditional banking infrastructure",
    },
  ],
];

const SendCrypto = () => {
  return (
    <div className="web-padding py-[40px]">
      <div>
        <h1 className="text-5xl lg:text-[65px] lg:leading-[180px] lg:tracking-[-1.3px] text-zebec-black">
          Spend crypto anywhere
        </h1>
        <div className="text-lg lg:text-[29px] lg:leading-[38px] lg:tracking-[-0.29px] text-zebec-black mt-6 lg:mt-0">
          Users of the Zebec App will soon be able to use crypto for real-world
          purchases and fiat currency via Zebec’s gift cards. Get one for
          yourself or gift one to someone else!
        </div>
        <p className="text-[15px] leading-[17px] tracking-[-0.15px] text-grey-dark mt-5">
          *Nepal, India, Bangladesh, Pakistan, Singapore, Vietnam, China, Hong
          Kong, Nigeria, Kenya, Argentina
        </p>
      </div>
      <div className="md:flex gap-10 mt-10 items-center">
        <div className="max-w-[300px] lg:max-w-[400px] xl:max-w-[490px] mx-auto md:mx-0 mb-6 md:mb-0">
          <img
            src={SendCryptoImg}
            className="w-full rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="bg-zebec-teal px-14 py-16 rounded-[10px] flex-1 bg-opacity-[0.18] sm:flex space-y-10 sm:space-y-0 gap-6">
          {arrays.map((items, index) => {
            return (
              <div className="flex-1 space-y-10" key={index}>
                {items.map((data) => {
                  return (
                    <div key={data.title} className="max-w-[19rem]">
                      <h1 className="text-xl xl:text-[29px] xl:leading-[38px] xl:tracking-[-0.29px] text-zebec-black">
                        {data.title}
                      </h1>
                      <p className="text-sm text-xl text-grey-dark">
                        {data.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SendCrypto;
