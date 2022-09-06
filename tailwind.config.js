/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Moderatecyan: "hsl(176, 50%, 47%)",
        Darkcyan: "hsl(176, 72%, 28%)",
        Black: "hsl(0, 0%, 0%)",
        Darkgray: "hsl(0, 0%, 48%)",
        offWhite: "#F2F2F2",
      },
      fontFamily: {
        Commissioner: ["Commissioner", "sans-serif"],
      },
      backgroundImage: {
        heroDesktop: "url('/images/image-hero-desktop.jpg') ",
        heroMobile: "url('/images/image-hero-mobile.jpg') ",
      },
    },
  },
  plugins: [],
};
