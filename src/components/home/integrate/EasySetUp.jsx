import React from "react";
import {
  BuyGiftIcon,
  SignUpIcon,
  VirtualGiftIcon,
} from "../../../assets/icons";

const steps = [
  {
    title: "Sign up with your MetaMask",
    desc: "You just need to register on the Zebec app and connect your MetaMask wallet to your card account.",
    icon: <SignUpIcon />,
  },
  {
    title: "Buy gift cards",
    desc: "Make sure you have USDC in your MetaMask wallet. You’ll use this balance to purchase your gift cards. From the card page, buy a new gift card with the USDC in your Metamask and input the reciever’s information. ",
    icon: <BuyGiftIcon />,
  },
  {
    title: "Get a virtual gift card",
    desc: "The gift card can be used anywhere debit and prepaid cards are accepted. Use it in-person by adding it to your Apple Pay or Google Pay. Want to use it online? Get a virtual card in a few minutes.",
    icon: <VirtualGiftIcon />,
  },
];

const EasySetUp = () => {
  return (
    <div className="web-padding py-[40px] mb-40">
      <h1 className="text-5xl lg:text-[65px] lg:leading-[180px] lg:tracking-[-1.3px] text-zebec-black">
        Easy set up
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-10 lg:mt-0">
        {steps.map((data) => {
          return (
            <div
              key={data.title}
              className="rounded-[10px] border border-[#AEB0B0] p-5 lg:px-8 lg:py-10 flex flex-col justify-between"
            >
              <div className="max-w-[22rem]">
                <h1 className="text-xl xl:text-[29px] xl:leading-[38px] xl:tracking-[-0.29px] text-zebec-black">
                  {data.title}
                </h1>
                <p className=" text-sm xl:text-[21px] xl:leading-[29px] xl:tracking-[-0.21px] text-grey-dark mt-4">
                  {data.desc}
                </p>
              </div>
              <div className="mt-10">{data.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EasySetUp;
