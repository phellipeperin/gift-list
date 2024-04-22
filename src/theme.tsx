import { extendTheme } from '@mui/joy/styles';
import type { PaletteRange } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    gradient: true;
  }

  interface Palette {
    gradient: PaletteRange;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        gradient: {
          mainChannel:
            'linear-gradient(to bottom right, #61D8DE, #7577E6, #CE3AF3)',
        },
      },
    },
  },
});

export default theme;
