import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import * as Images from "../../assets/images/index";
// import ZebecPrivacyPolicyPdf from "../products/zebec-card/ZebecPrivacyPolicy.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <div className=" pt-16 pb-8 bg-darkish">
        <div className="web-container">
          <div className="flex flex-col lg:flex-row gap-x-10 gap-y-28 justify-between pb-16 lg:pb-40">
            <NavLink to="/">
              <img
                src={Images.ZebecLogoWhiteImg}
                alt="Zebec logo"
                className="h-12"
              />
            </NavLink>
            <div className="flex flex-col sm:flex-row gap-x-20 gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="text-body text-grey-light font-ppmori">
                  Products:
                </p>
                {/* <NavLink
                  to="/products/zebec-card"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Zebec Card
                </NavLink> */}
                <NavLink
                  to="/products/revolutionizing-payroll"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Payment Streams
                </NavLink>
                <NavLink
                  to="/products/zebec-safes"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Zebec Safes
                </NavLink>
                <NavLink
                  to="/products/web3-banking"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Web 3 Banking
                </NavLink>
                <NavLink
                  to="/zebec-labs"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Zebec Labs
                </NavLink>
              </div>
              <div className="flex flex-col gap-y-2">
                {/* Docs */}
                <p className="text-body text-grey-light font-ppmori">
                  Resources:
                </p>
                <a
                  href="https://docs.zebec.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Docs
                </a>
                <a
                  href="mailto:support@zebec.io"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Help and Support
                </a>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-body text-grey-light font-ppmori">
                  Follow us:
                </p>
                <a
                  href="https://discord.gg/fJM9cHuvvB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Discord
                </a>
                <a
                  href="https://twitter.com/Zebec_HQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Twitter
                </a>
                <a
                  href="https://t.me/zebecprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Telegram
                </a>
                <a
                  href="https://www.instagram.com/zebec_hq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white hover:text-primary font-ppmori"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col text-body-sm text-grey-light max-w-[434px] pr-24">
              <div className="text-body-sm text-grey-light font-ppmori">
                © {currentYear} Zebec. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
