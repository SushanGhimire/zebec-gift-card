/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "6.5xl": "4rem",
        "4.5xl": "2.5rem",
        "5.1xl": "3rem",
        // Website
        brand: [
          "var(--fs-brand)",
          {
            lineHeight: "var(--lh-brand)",
            letterSpacing: "var(--ls-tight-4)",
          },
        ],
        header: [
          "var(--fs-header)",
          {
            lineHeight: "var(--lh-header)",
            letterSpacing: "var(--ls-tight-2)",
          },
        ],
        caption: [
          "var(--fs-caption)",
          {
            lineHeight: "var(--lh-caption)",
            letterSpacing: "var(--ls-tight-3)",
          },
        ],
        "caption-sm": [
          "var(--fs-caption-sm)",
          {
            lineHeight: "var(--lh-caption-sm)",
            letterSpacing: "var(--ls-tight-3)",
          },
        ],
        subheader: [
          "var(--fs-subheader)",
          {
            lineHeight: "var(--lh-subheader)",
            letterSpacing: "var(--ls-tight-1)",
          },
        ],
        body: [
          "var(--fs-body)",
          {
            lineHeight: "var(--lh-body)",
            letterSpacing: "var(--ls-tight-1)",
          },
        ],
        "body-md": [
          "var(--fs-body)",
          {
            lineHeight: "var(--lh-body-md)",
            letterSpacing: "var(--ls-tight-3)",
          },
        ],
        "body-sm": [
          "var(--fs-body-sm)",
          {
            lineHeight: "var(--lh-body-sm)",
            letterSpacing: "var(--ls-tight-1)",
          },
        ],
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        ppmori: "'PP Mori', sans-serif",
        sans: "'Archivo', sans-serif",
        mono: "'Lato', sans-serif",
        roboto: "'Lato', sans-serif",
        archivo: "'Archivo', sans-serif",
        Lato: "'Lato', sans-serif",
      },
      colors: {
        // Light - Website
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        darkish: "var(--color-darkish)",
        grey: {
          light: "rgb(var(--color-grey-light) / <alpha-value>)",
          DEFAULT: "var(--color-grey)",
          dark: "var(--color-grey-dark)",
        },
        // ---------
        zebec: {
          black: "rgba(19 19 19 / <alpha-value>)",
          teal: "rgba(8 224 163 / <alpha-value>)",
          gray: "#AEB0B0",
          grayText: "#8F8F8F",
        },
        debit: {
          from: "var(--debit-from)",
          via: "var(--debit-via)",
          to: "var(--debit-to)",
        },
        faqBorder: `rgba(255, 255, 255, 0.06)`,
        whiteText: "#FCFCFD",
        border: "#DEE2E6",
        iris: {
          DEFAULT: "#A5A6F6",
        },
        teal: {
          DEFAULT: "#2DA4D7",
          dark: "#355C7D",
        },
        purple: {
          light: "#EFDBFB",
          DEFAULT: "#7C65F1",
          dark: "#9644B4",
        },
        blue: {
          light: "#F2F7FF",
          light2: "#F5F9FF",
          charlieLight: "#DDEAFE",
          DEFAULT: "#59A0D2",
          medium: "#2A7DFB",
          dark: "#355C7D",
          hover: "#055FEB",
        },
        indigo: {
          light: "#DBE2FB",
          DEFAULT: "#7B61FF",
          dark: "",
        },
        green: {
          light: "#DBFBEC",
          charlieLight: "#DEFFF3",
          medium: "#CDF9DE",
          DEFAULT: "#29BB89",
          dark: "#6FCF97",
          hover: "#47C27A",
        },
        red: {
          light: "#EE282810",
          light2: "#FEE4E2",
          charlieLight: "#FFF2F5",
          medium: "#F9CDCD",
          DEFAULT: "#ED584F",
          dark: "#EB5757",
        },
        gray: {
          light: "#F5F5F5",
          DEFAULT: "#FAFAFA",
          dark: "#ACACAC",
          dark2: "#C4C4C4",
          text: "#11111150",
          charlieLight: "#F2F2F2",
          charlie: "#4F4F4F",
          gray3: "#828282",
          gray4: "#919191",
          gray5: "#999999",
          gray6: "#F2F2F2",
          gray7: "#f9fafb",
          gray8: "#98A2B3",
        },
        dark: {
          light: "#9F9F9F",
          medium: "#535354",
          DEFAULT: "#4F4F4F",

          dark: "#333333",
          button: "#1A1B1F",
        },
        divider: "#E5E5E5",
        divider2: "#ECECEC",
        form: {
          DEFAULT: "#F5F5F5",
        },
        warning: {
          light: "#FEF0C7",
          DEFAULT: "#F79009",
          dark: "#B54708",
        },
      },
      spacing: {
        18: "4.688rem",
        630: "39.375rem",
        302: "302px",
      },
      maxWidth: {
        xxs: "18rem",
        860: "860px",
      },
      minWidth: {
        28: "7rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      maxHeight: {
        650: "650px",
        675: "675px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "8rem",
          xl: "10rem",
          "2xl": "12rem",
        },
      },
      lineHeight: {
        4.5: "18px",
      },
      letterSpacing: {
        tightest: "-0.0075em",
      },
    },
  },
  plugins: [],
};
