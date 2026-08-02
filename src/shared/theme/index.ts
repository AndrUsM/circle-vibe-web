import { createTheme } from '@mui/material/styles';

const DEFAULT_FIELDS_SIZE = 'small';
const ACCENT_COLOR = '#f39332';
const CONTRAST_TEXT_COLOR = '#ffffff';

const DEFAULT_SUCCESS_COLOR = '#00cc66';
const DEFAULT_SUCCESS_TEXT = '#085a31';

const DEFAULT_ERROR_COLOR = '#c62828';

const DEFAULT_TEXT = '#222222';
const SECONDARY_TEXT = '#333333';
const DISABLED_TEXT = '#666666';

const INTERACTIVE_TAB_INDEX = -1;

export const DEFAULT_THEME = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: 'Inclusive Sans, sans-serif',
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.75rem',
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: DEFAULT_FIELDS_SIZE,
        tabIndex: INTERACTIVE_TAB_INDEX,
      }
    },
    MuiTextField: {
      defaultProps: {
        size: DEFAULT_FIELDS_SIZE,
        tabIndex: INTERACTIVE_TAB_INDEX,
        variant: 'outlined'
      },
    }
  },
  palette: {
    primary: {
      main: ACCENT_COLOR,
      contrastText: CONTRAST_TEXT_COLOR,
    },
    secondary: {
      main: '#212121',
      contrastText: CONTRAST_TEXT_COLOR,
    },
    success: {
      main: DEFAULT_SUCCESS_COLOR,
      contrastText: DEFAULT_SUCCESS_TEXT
    },
    error: {
      main: DEFAULT_ERROR_COLOR,
      contrastText: CONTRAST_TEXT_COLOR
    },
    divider: ACCENT_COLOR,
    text: {
      primary: DEFAULT_TEXT,
      secondary: SECONDARY_TEXT,
      disabled: DISABLED_TEXT
    },
  },
});