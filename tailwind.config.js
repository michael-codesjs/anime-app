/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1088px"
      },
      colors: {
        blackAlpha: "rgba(0,0,0,0.6)"
      },
      keyframes: {
        "bounce-horizontal": {
          '0%, 100%': {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
        },
        '50%': {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
        },
      }
    },
    animation: {
      "bounce-horizontal": 'wiggle 1s ease-in-out infinite',
    }
  }
},
  plugins: [],
}
