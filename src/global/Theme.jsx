import { createTheme } from '@mui/material/styles';
import variables from './Variables';

export const theme = createTheme({
  palette: {
    primary: {
      main: variables.greenText,
    },
    accent: {
      accent: variables.accentColor,
    },
  },
});
