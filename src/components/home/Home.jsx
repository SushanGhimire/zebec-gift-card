import React from "react";
import Layout from "../layout/Layout";
import EasySetUp from "./integrate/EasySetUp";
import HeroSection from "./integrate/HeroSection";
import SendCrypto from "./integrate/SendCrypto";

const Home = () => {
  return (
    <div>
      <Layout>
        <>
          <HeroSection />
          <SendCrypto />
          <EasySetUp />
        </>
      </Layout>
    </div>
  );
};

export default Home;
