/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.jsx'],
  theme: {
    extend: {
      colors: {
        mauve1: 'hsl(300, 20.0%, 99.0%)',
        mauve2: 'hsl(300, 7.7%, 97.5%)',
        mauve3: 'hsl(294, 5.5%, 95.3%)',
        mauve4: 'hsl(289, 4.7%, 93.3%)',
        mauve5: 'hsl(283, 4.4%, 91.3%)',
        mauve6: 'hsl(278, 4.1%, 89.1%)',
        mauve7: 'hsl(271, 3.9%, 86.3%)',
        mauve8: 'hsl(255, 3.7%, 78.8%)',
        mauve9: 'hsl(252, 4.0%, 57.3%)',
        mauve10: 'hsl(253, 3.5%, 53.5%)',
        mauve11: 'hsl(252, 4.0%, 44.8%)',
        mauve12: 'hsl(260, 25.0%, 11.0%)',

        violet1: 'hsl(255, 65.0%, 99.4%)',
        violet2: 'hsl(252, 100%, 99.0%)',
        violet3: 'hsl(252, 96.9%, 97.4%)',
        violet4: 'hsl(252, 91.5%, 95.5%)',
        violet5: 'hsl(252, 85.1%, 93.0%)',
        violet6: 'hsl(252, 77.8%, 89.4%)',
        violet7: 'hsl(252, 71.0%, 83.7%)',
        violet8: 'hsl(252, 68.6%, 76.3%)',
        violet9: 'hsl(252, 56.0%, 57.5%)',
        violet10: 'hsl(251, 48.1%, 53.5%)',
        violet11: 'hsl(250, 43.0%, 48.0%)',
        violet12: 'hsl(254, 60.0%, 18.5%)',
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
