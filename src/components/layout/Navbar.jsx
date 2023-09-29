import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../shared/Button";
import * as Images from "../../assets/images";
import * as Icons from "../../assets/icons";
import { routes } from "./routes";

const useClickOutside = (ref, { onClickOutside }) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document?.addEventListener("mousedown", handleClickOutside);
    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

const ChooseNetworkDropdown = () => {
  return (
    <>
      <div className="p-6">
        <p className="!font-inter text-base font-bold text-[#141414]">
          Choose Network
        </p>
        <p className="!font-inter text-sm text-[#565656] mb-4">
          Select the network to connect your personal wallet
        </p>

        <div className="flex flex-col gap-y-3">
          <a
            href="https://app.zebec.io"
            target="_blank"
            rel="noreferrer"
            className="dropdown-inner-link flex items-center gap-x-2 text-sm leading-6 px-6 py-2 rounded-lg"
          >
            {/* Solana */}
            <img src={Images.SolanaIconImg} alt="" />
            <span>Solana</span>
          </a>
          <a
            href="https://nautilus.zebec.io/"
            target="_blank"
            rel="noreferrer"
            className="dropdown-inner-link flex items-center gap-x-2 text-sm leading-6 px-6 py-2 rounded-lg"
          >
            {/* Nautchain */}
            <img src={Images.NautiusLogo} className="w-5 h-5" alt="" />
            <span>Nautilus Chain</span>
          </a>
          <a
            href="https://bnb.zebec.io/"
            target="_blank"
            rel="noreferrer"
            className="dropdown-inner-link flex items-center gap-x-2 text-sm leading-6 px-6 py-2 rounded-lg"
          >
            {/* BNB */}
            <img src={Images.BNBLogo} className="w-5 h-5" alt="" />
            <span>Binance Smart Chain</span>
          </a>
          <a
            href="https://near.zebec.io"
            target="_blank"
            rel="noreferrer"
            className="dropdown-inner-link flex items-center gap-x-2 text-sm leading-6 px-6 py-2 rounded-lg"
          >
            <img src={Images.NearIconImg} alt="" />
            <span>Near Protocol</span>
          </a>
        </div>
      </div>
    </>
  );
};

const MobileNavDropdown = ({ route, openParent, setIsMenuToggled }) => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const returnMobileChildrenComponent = (route) => {
    const childrenObject = route;
    if (childrenObject?.children.length > 0) {
      return childrenObject.children.map((child) => {
        if (child.isAnchor) {
          return (
            <div key={child.name} className="">
              <a
                href={child.path}
                target={`${child.extraLink ? "_blank" : ""}`}
                rel="noreferrer"
                onClick={() => {
                  setIsMenuToggled(false);
                  setToggleMenu(false);
                }}
                className="text-body hover:text-primary font-ppmori text-darkish mt-3 mb-2"
              >
                {child.name}
              </a>
            </div>
          );
        } else {
          return (
            <>
              {child.name === "Zebec Card" ? (
                <NavLink
                  to={{
                    pathname: child.path,
                    state: {
                      name: childrenObject.name,
                    },
                  }}
                  onClick={() => {
                    setIsMenuToggled(false);
                    setToggleMenu(false);
                  }}
                  key={child.name}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : ""
                    } text-body hover:text-primary font-ppmori text-darkish mb-2`
                  }
                >
                  <div className="flex flex-col">{child.name}</div>
                </NavLink>
              ) : (
                <a
                  href={child.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setIsMenuToggled(false);
                    setToggleMenu(false);
                  }}
                  key={child.name}
                  className={`text-body hover:text-primary font-ppmori text-darkish mb-2`}
                >
                  <div className="flex flex-col">{child.name}</div>
                </a>
              )}
            </>
          );
        }
      });
    } else {
      return null;
    }
  };

  return (
    <div className="">
      <div
        className={`flex items-center gap-x-2 text-body hover:text-primary font-ppmori cursor-pointer ${
          location?.state?.name === route.name ||
          (openParent.open && openParent.name === route.name)
            ? "text-zebec-teal"
            : "text-darkish"
        }`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {route.name}
        <Icons.CheveronDownIcon
          className={`w-4 h-4 transition-all ${
            openParent.open && openParent.name === route.name && "rotate-180"
          } ${toggleMenu && "rotate-180"}`}
        />
      </div>

      <div
        className={`ml-6 transition-all duration-300 overflow-hidden ${
          toggleMenu ? "max-h-[110px]" : "max-h-0"
        }`}
      >
        {returnMobileChildrenComponent(route)}
      </div>
    </div>
  );
};

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuToggled]);

  //Products
  const [openParent, setOpenParent] = useState({
    open: false,
    name: "",
  });

  // Dropdown
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef(null);
  const mobileRef = useRef(null);
  useClickOutside(ref, {
    onClickOutside: () => setOpen(false),
  });
  useClickOutside(mobileRef, {
    onClickOutside: () => setMobileOpen(false),
  });

  useEffect(() => {
    setOpenParent({
      open: false,
      name: openParent.name,
    });
    // eslint-disable-next-line
  }, [location.pathname]);

  const returnChildrenComponent = () => {
    const childrenObject = routes.find(
      (route) => route.name === openParent.name
    );
    if (childrenObject?.children.length > 0) {
      return childrenObject.children.map((child) => {
        if (child.isAnchor) {
          return (
            <a
              key={child.name}
              href={child.path}
              target={`${child.extraLink ? "_blank" : ""}`}
              rel="noreferrer"
              onClick={() =>
                setOpenParent({
                  name: "",
                  open: false,
                })
              }
              className="text-body hover:text-primary font-ppmori text-darkish mt-3 mb-1"
            >
              {child.name}
            </a>
          );
        } else {
          return (
            <>
              {child.name === "Zebec Card" ? (
                <NavLink
                  to={{
                    pathname: child.path,
                    state: {
                      name: childrenObject.name,
                    },
                  }}
                  key={child.name}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : ""
                    } text-body hover:text-primary font-ppmori text-darkish mb-1`
                  }
                >
                  <div className="flex flex-col">
                    {child.name}
                    <div className="text-primary">{child.icon}</div>
                  </div>
                </NavLink>
              ) : (
                <a
                  href={child.path}
                  rel="noreferrer"
                  target="_blank"
                  className="text-body hover:text-primary font-ppmori text-darkish mb-1"
                >
                  <div className="flex flex-col">
                    {child.name}
                    <div className="text-primary">{child.icon}</div>
                  </div>
                </a>
              )}
            </>
          );
        }
      });
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <nav ref={navRef} className="">
        <div
          className={`relative flex justify-between pt-6 pb-7 z-30 px-4 md:px-12 ${
            openParent.open && "border-b border-grey-light"
          }`}
        >
          <NavLink to="/">
            <img
              src={Images.ZebecLogoImg}
              className="h-6 lg:h-8"
              alt="Zebec logo"
            />
          </NavLink>
          <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-5">
            {routes.map((route) => {
              switch (route.component) {
                case "item":
                  return (
                    <NavLink
                      key={route.name}
                      to={route.path}
                      className={({ isActive }) =>
                        `${
                          isActive ? "text-primary" : ""
                        } text-body hover:text-primary font-ppmori text-darkish`
                      }
                    >
                      {route.name}
                    </NavLink>
                  );
                case "parent":
                  return (
                    <div
                      key={route.name}
                      className={`flex items-center gap-x-2 text-body hover:text-primary font-ppmori cursor-pointer ${
                        location?.state?.name === route.name ||
                        (openParent.open && openParent.name === route.name)
                          ? "text-zebec-teal"
                          : "text-darkish"
                      }`}
                      onClick={() =>
                        openParent.open && openParent.name === route.name
                          ? setOpenParent({
                              name: "",
                              open: false,
                            })
                          : setOpenParent({
                              name: route.name,
                              open: true,
                            })
                      }
                    >
                      {route.name}
                      <Icons.CheveronDownIcon
                        className={`w-4 h-4 transition-all ${
                          openParent.open &&
                          openParent.name === route.name &&
                          "rotate-180"
                        }`}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
            <a
              href="https://horizon.zebec.io/#/about"
              target="_blank"
              rel="noreferrer"
              className="text-body hover:text-primary font-ppmori text-darkish"
            >
              Horizon
            </a>
            <div
              ref={ref}
              className={`dropdown relative ${open ? `active` : ""}`}
              data-dropdown
            >
              <Button
                title="Launch App"
                endIcon={
                  <Icons.CheveronDownIcon className="ml-1.5 mb-1 w-4 h-4" />
                }
                size="small"
                className="!px-7 data-dropdown-button"
                onClick={() => setOpen(!open)}
              />
              <div
                className={`dropdown-menu absolute right-0 w-[408px] bg-white rounded-2xl`}
              >
                <ChooseNetworkDropdown />
              </div>
            </div>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {isMenuToggled ? (
              <Icons.CrossIcon className="w-6 h-6" />
            ) : (
              <Icons.MenuIcon />
            )}
          </button>
        </div>
        <div
          className={`lg:transition-all lg:duration-300 lg:ease-in-out overflow-hidden h-0 opacity-0 hidden lg:block ${
            openParent.open
              ? "h-[106px]  border-b border-grey-light opacity-100"
              : ""
          }`}
        >
          <div className="lg:flex justify-end gap-x-11 z-30 px-4 py-5 md:px-20">
            {returnChildrenComponent()}
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed lg:hidden left-0 right-0 z-20 transition-all duration-500 bg-white`}
        style={{
          bottom: isMenuToggled
            ? "0px"
            : `calc(100vh - ${
                navRef.current?.offsetHeight - scrollPosition
              }px)`,
          top: `${navRef.current?.offsetHeight + scrollPosition}px`,
        }}
      >
        <div
          className={`web-container bg-white flex flex-col items-start gap-y-5 transition-all duration-500 overflow-x-hidden ${
            isMenuToggled ? "h-full py-10" : "h-0"
          }`}
        >
          {routes.map((route) => {
            switch (route.component) {
              case "item":
                return (
                  <NavLink
                    key={route.name}
                    to={route.path}
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : ""
                      } text-body hover:text-primary font-ppmori text-darkish`
                    }
                  >
                    {route.name}
                  </NavLink>
                );
              case "parent":
                return (
                  <MobileNavDropdown
                    key={route.name}
                    route={route}
                    openParent={openParent}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                );
              default:
                return null;
            }
          })}
          <a
            href="https://horizon.zebec.io/#/about"
            target="_blank"
            rel="noreferrer"
            className="text-body hover:text-primary font-ppmori text-darkish"
          >
            Horizon
          </a>
          <div
            ref={mobileRef}
            className={`dropdown relative w-full ${mobileOpen ? `active` : ""}`}
            data-dropdown
          >
            <Button
              title="Launch App"
              endIcon={
                <Icons.CheveronDownIcon className="ml-1.5 mb-1 w-4 h-4" />
              }
              size="small"
              className="!px-7 data-dropdown-button"
              onClick={() => setMobileOpen(!mobileOpen)}
            />
            <div
              className={`dropdown-menu absolute left-0 max-w-[408px] bg-white rounded-2xl`}
            >
              <ChooseNetworkDropdown />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
