import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { type ReactNode, useEffect, useState } from 'react';

import { createSnMuiTheme } from '@/theme/mui-theme';

type ThemeMode = 'light' | 'dark';

interface MuiThemeProviderProps {
  children: ReactNode;
  mode?: ThemeMode;
}

const getThemeFromDom = (): ThemeMode => {
  if (typeof document === 'undefined') {
    return 'light';
  }

  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
};

const MuiThemeProvider = ({ children, mode }: MuiThemeProviderProps) => {
  const [resolvedMode, setResolvedMode] = useState<ThemeMode>(mode ?? getThemeFromDom());

  useEffect(() => {
    if (mode) {
      setResolvedMode(mode);
      return;
    }

    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setResolvedMode(getThemeFromDom());
    });

    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    setResolvedMode(getThemeFromDom());

    return () => observer.disconnect();
  }, [mode]);

  const theme = createSnMuiTheme(resolvedMode, document.documentElement);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
