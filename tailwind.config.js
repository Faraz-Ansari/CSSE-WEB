/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your components are in different folders
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
};
