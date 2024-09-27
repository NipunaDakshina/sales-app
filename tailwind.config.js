/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define custom colors here
        "custom-light-blue": "#7148FE", 
        "custom-dark-blue": "#0C0728", 
        "custom-dark-gold": "#DD6410", 
        "custom-light-gold": "#E78A14",
        "bgcolor-01":"#1F1957",
        "bgcolor-02":"#01011B"
      },
    },
  },
  plugins: [],
};
