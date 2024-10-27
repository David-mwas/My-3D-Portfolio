/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "profile-animate": "profileAnimate 8s ease-in-out infinite 1s",
      },
      keyframes: {
        profileAnimate: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      boxShadow: {
        "custom-blueviolet": "1px 2px 133px blueviolet",
      },
      colors: {
        dark: {
          background: "#1a1a1a",
          text: "#ffffff",
        },
        light: {
          background: "#ffffff",
          text: "#000000",
        },
      },
    },
  },

  plugins: [],
};
