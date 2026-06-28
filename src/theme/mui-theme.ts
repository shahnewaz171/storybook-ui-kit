import { createTheme, type Theme } from '@mui/material/styles';

import { readSnRadiusPx, resolveSnPalette, type SnPaletteTokens, snVar } from './sn-css-vars';

type ThemeMode = 'light' | 'dark';

const buildPalette = (mode: ThemeMode, tokens: SnPaletteTokens) =>
  ({
    mode,
    primary: {
      main: tokens.primary,
      contrastText: tokens.primaryForeground
    },
    secondary: {
      main: tokens.secondary,
      contrastText: tokens.secondaryForeground
    },
    error: {
      main: tokens.destructive,
      contrastText: tokens.destructiveForeground
    },
    background: {
      default: tokens.background,
      paper: tokens.card
    },
    text: {
      primary: tokens.foreground,
      secondary: tokens.mutedForeground
    },
    divider: tokens.border
  }) as const;

const sharedComponents = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none'
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: snVar('radius'),
        '& fieldset': {
          borderColor: snVar('border')
        },
        '&:hover fieldset': {
          borderColor: snVar('ring')
        },
        '&.Mui-focused fieldset': {
          borderColor: snVar('ring')
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: snVar('muted-foreground'),
        '&.Mui-focused': {
          color: snVar('primary')
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: snVar('muted-foreground'),
        '&.Mui-error': {
          color: snVar('destructive')
        }
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: `color-mix(in srgb, ${snVar('primary')} 12%, transparent)`,
          '&:hover': {
            backgroundColor: `color-mix(in srgb, ${snVar('primary')} 18%, transparent)`
          }
        }
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: snVar('popover'),
        color: snVar('popover-foreground'),
        borderRadius: snVar('radius'),
        border: `1px solid ${snVar('border')}`
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        color: snVar('foreground')
      }
    }
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        color: snVar('muted-foreground')
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily: 'inherit'
      }
    }
  }
} as const;

export const createSnMuiTheme = (mode: ThemeMode, target?: Element): Theme => {
  const tokens = resolveSnPalette(mode, target);

  return createTheme({
    palette: buildPalette(mode, tokens),
    shape: {
      borderRadius: readSnRadiusPx(target)
    },
    typography: {
      fontFamily: 'inherit'
    },
    components: sharedComponents
  });
};
