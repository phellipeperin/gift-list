import { extendTheme } from '@mui/joy/styles';

// A custom theme for this app
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: 'linear-gradient(to top right, #61D8DE, #7577E6, #CE3AF3)',
        },
      },
    }
  }
});

export default theme;
