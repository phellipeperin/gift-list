import { extendTheme } from '@mui/joy/styles';
import type { PaletteRange } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    secondary: true;
    gradient: true;
  }

  interface Palette {
    secondary: PaletteRange;
    gradient: PaletteRange;
  }
}

const lightBlue = '#61D8DE';
const purple = '#7577E6';
const pink = '#CE3AF3';

// A custom theme for this app
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        gradient: {
          mainChannel: `linear-gradient(to top right, ${lightBlue}, ${purple}, ${pink})`,
        },
      },
    },
  },
});

export default theme;
