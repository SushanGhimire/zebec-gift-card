import * as Icons from "../../assets/icons";

export const routes = [
  {
    component: "item",
    name: "Home",
    path: "/",
  },
  {
    component: "parent",
    name: "Products",
    path: "",
    children: [
      {
        name: "Zebec Card",
        path: "/",
        icon: <Icons.ZebecCardIcon className="w-8 h-8" />,
        isAnchor: false,
      },
      {
        name: "Payment Streams",
        path: "https://zebec.io/products/revolutionizing-payroll",
        icon: <Icons.PayrollIcon className="w-8 h-8" />,
        isAnchor: false,
      },
      {
        name: "Zebec Safes",
        path: "https://zebec.io/products/zebec-safes",
        icon: <Icons.TreasuryIcon className="w-8 h-8" />,
        isAnchor: false,
      },
      {
        name: "Web3 Banking",
        path: "https://zebec.io/products/web3-banking",
        icon: <Icons.Web3Icon className="w-8 h-8" />,
        isAnchor: false,
      },
    ],
  },
  {
    component: "item",
    name: "Zebec Labs",
    path: "/zebec-labs",
  },
  {
    component: "item",
    name: "Company",
    path: "/company",
  },
];
