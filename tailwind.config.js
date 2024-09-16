/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        screens: {
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
          },
        extend: {
            fontFamily: { Lexend: ["Lexend Deca", "sans-serif"] },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(50px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadeDown: {
                    "0%": { opacity: 0, transform: "translateY(-20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadeLeft: {
                    "0%": { opacity: 0, transform: "translateX(-20px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
                fadeRight: {
                    "0%": { opacity: 0, transform: "translateX(20px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 2s ease-out forwards",
                "fade-down": "fadeDown 1s ease-out",
                "fade-left": "fadeLeft 1s ease-out forwards",
                "fade-right": "fadeRight 1s ease-out forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
