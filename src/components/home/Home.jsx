import React from "react";
import EasySetUp from "./integrate/EasySetUp";
import HeroSection from "./integrate/HeroSection";
import SendCrypto from "./integrate/SendCrypto";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SendCrypto />
      <EasySetUp />
    </div>
  );
};

export default Home;
