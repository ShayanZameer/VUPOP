

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1C",
        secandary: '#F8FD24',
        tertiary: "#9A9A9A",
        quaternary: '#333333',
        quinary:"#313136"
      },
      fontFamily: {
        leagueSpartan: ['"League Spartan"', 'sans-serif'],
        'Norwester': ['Norwester', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(186, 177, 2, 0) 0%, rgba(255, 245, 40, 0.5) 100%)',
      },
      screens: {
        xm: "350px",
        xmm: "430px",
        sm: "576px",
        smm: "673px",
        mdd: "753px",
        md: "837px",
        lg: "992px",
        lgg: "1100px",
        xl: "1201px",
        "2xl": "1401px",
      },
    },
  },
  plugins: [],
}

