import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0066B3',
    },
    secondary: {
      main: '#9a989a',
    },
    error: {
      main: '#ed1c24',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;