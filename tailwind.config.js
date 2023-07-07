/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        sour: '#82C24A',
        sourBG: '#2D2D2D',
        sourText: '#BDBDBD',
        sourMute: '#666',
        sourHalfMute: '#999',
        sourBottomBorder: '#1f1f1f',
        sourLink: '#53a245',
        sourThings: '#55cbe2',
        sourFormBorder: '#494949',
        sourButtonHover: '#68a138',
        sourButtonHoverBorder: '#57872e',
        sourButtonBorder: '#74b43e',
        sourChannelButton: '#202020',
        sourChannelButtonHover: '#474747',
      },
      height: {
        sourLeftHeight: '88%',
        sourThingsImage: '110px',
      },
      width: {
        sourThingsImage: '110px',
      },
      minWidth: {
        sourThingsImage: '110px',
      },
      margin: {
        sourLeft: '32%',
      },
      borderWidth: {
        sourThingsBorder: '6px',
      },
      fontSize: {
        sourThingsSeen: '10px',
      },
      zIndex: {
        overAll: '9999',
      },
    },
  },
  plugins: [],
};
