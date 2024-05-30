/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      colors: {
        redPink: "#FA5858",
        softPink: "#FCE4E4",
        blushPink: "#FFBDBD",
        midnightGray: "#32383E",
        iceBlue: "#F0F4F8",
        softBlue: "#D3DEE8",
        leafGreen: "#719E04",
        lightBeige: "#EBEBD1",
        oliveGray: "#A2A38B",
        cloudGray: "#CDD7E1",
      },
    },
  },
  plugins: [],
};
