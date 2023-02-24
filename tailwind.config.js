module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFF",
      blue: {
        50: "#f3f7fe",
        100: "#dbe6fd",
        150: "#c3d6fb",
        200: "#abc6fa",
        250: "#93b5f8",
        300: "#7ba5f7",
        350: "#6394f5",
        400: "#4b84f4",
        450: "#2E70F2",
        500: "#1c63f1",
        550: "#1a5be8",
        600: "#174fcf",
        650: "#1443b6",
        700: "#11379d",
        750: "#0e2b84",
        800: "#0b1f6b",
        850: "#091352",
        900: "#06073a",
        950: "#040022",
        1000: "#02000a",
        DEFAULT: "#2E70F2",
      },
      grey: {
        50: "#f9fafb",
        100: "#f6f7f8",
        150: "#f2f3f5",
        200: "#e5e6e9",
        250: "#d9dadb",
        300: "#babdc5",
        350: "#aeb0b9",
        400: "#9ea3ad",
        450: "#8e97a1",
        500: "#828996",
        550: "#7a819b",
        600: "#696f7d",
        650: "#5e6370",
        700: "#525761",
        750: "#464b52",
        800: "#3a3e45",
        850: "#2e3237",
        900: "#23252a",
        950: "#1C1D21",
        1000: "#121316",
        DEFAULT: "#828996",
      },
      black: "#111111",
      green: "#18aa74",
      yellow: "#ffb700",
      red: "#ff4136",
      background: "var(--background-color)",
    },
    screens: {
      xxs: "420px",
      xs: "480px",
      sm: "640px",
      md: "800px",
      mdWithMargin: "880px",
      lg: "1024px",
      xl: "1264px",
    },
    fontFamily: {
      sans: ["var(--font-apercu)", "Helvetica", "Arial", "ui-sans-serif", "sans-serif"],
      mono: ["var(--font-spacemono)", "monospace"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      xs: [
        "12px",
        {
          letterSpacing: "0px",
          lineHeight: "1.3",
        },
      ],
      sm: [
        "14px",
        {
          letterSpacing: "0px",
          lineHeight: "1.3",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "1.7",
        },
      ],
      lg: [
        "20px",
        {
          lineHeight: "1.7",
        },
      ],
      xl: [
        "26px",
        {
          letterSpacing: "0px",
          lineHeight: "1.7",
        },
      ],
      xxl: [
        "32px",
        {
          letterSpacing: "0px",
          lineHeight: "1.5",
        },
      ],
    },
    spacing: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
      21: "84px",
      22: "88px",
      23: "92px",
      24: "96px",
      25: "100px",
      26: "104px",
      27: "108px",
      28: "112px",
      29: "116px",
      30: "120px",
      31: "124px",
      32: "128px",
      31: "132px",
      34: "136px",
      35: "140px",
      36: "144px",
      37: "148px",
      38: "152px",
      39: "156px",
      40: "160px",
      41: "164px",
      42: "168px",
      43: "172px",
      44: "176px",
      45: "180px",
      46: "184px",
      47: "188px",
      48: "192px",
      49: "196px",
      50: "200px",
      51: "204px",
      52: "208px",
      53: "212px",
      54: "216px",
      55: "220px",
      56: "224px",
      57: "228px",
      58: "232px",
      59: "236px",
      60: "240px",
    },
    extend: {
      boxShadow: {
        "inset-dark": "inset 0px -5px 0px 5px #202226",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
