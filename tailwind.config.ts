import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(50% 50% at 50% 50%,#38bdf8 0,rgba(0,220,130,0) 100%)',
      },
    },
  },
  // eslint-disable-next-line ts/no-require-imports
  plugins: [require('@tailwindcss/typography')],
};
