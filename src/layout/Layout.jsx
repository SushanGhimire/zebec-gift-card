import React from "react";
import Footer from "./Footer";
import FooterAnimatedLoop from "./FooterAnimatedLoop";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Navbar announcementHeaderHeight={announcementHeaderHeight} /> */}
      <main>{children}</main>
      <FooterAnimatedLoop />
      <Footer />
    </div>
  );
};

export default Layout;
