module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',      // Professional blue (hardworking, reliable)
        accent: '#3b82f6',       // Lighter blue accent (efficient, clean)
        neutral: '#64748b',      // Slate gray (minimalist, simple)
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
