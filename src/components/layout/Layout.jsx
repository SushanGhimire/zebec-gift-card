import React from "react";
import Footer from "./Footer";
import FooterAnimatedLoop from "./FooterAnimatedLoop";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <FooterAnimatedLoop />
      <Footer />
    </div>
  );
};

export default Layout;
