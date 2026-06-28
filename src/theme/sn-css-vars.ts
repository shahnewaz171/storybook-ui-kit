export const snVar = (token: string) => `var(--sn-${token})`;

export type SnTokenName =
  | 'background'
  | 'foreground'
  | 'card'
  | 'card-foreground'
  | 'popover'
  | 'popover-foreground'
  | 'primary'
  | 'primary-foreground'
  | 'secondary'
  | 'secondary-foreground'
  | 'muted'
  | 'muted-foreground'
  | 'accent'
  | 'accent-foreground'
  | 'destructive'
  | 'destructive-foreground'
  | 'border'
  | 'input'
  | 'ring'
  | 'radius';

export type SnPaletteTokens = Record<
  | 'background'
  | 'foreground'
  | 'card'
  | 'cardForeground'
  | 'popover'
  | 'popoverForeground'
  | 'primary'
  | 'primaryForeground'
  | 'secondary'
  | 'secondaryForeground'
  | 'muted'
  | 'mutedForeground'
  | 'destructive'
  | 'destructiveForeground'
  | 'border'
  | 'input'
  | 'ring'
  | 'radius',
  string
>;

const readRawToken = (token: SnTokenName, target?: Element): string => {
  if (typeof document === 'undefined') {
    return '';
  }

  return getComputedStyle(target ?? document.documentElement)
    .getPropertyValue(`--sn-${token}`)
    .trim();
};

const normalizeColorForMui = (color: string): string => {
  if (!color || color.startsWith('rgb') || color.startsWith('#')) {
    return color;
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    return color;
  }

  context.fillStyle = '#000000';
  context.fillStyle = color;

  return context.fillStyle;
};

/** Resolve a token to rgb/rgba so MUI palette helpers can parse it. */
const readColorToken = (token: SnTokenName, target?: Element): string => {
  if (typeof document === 'undefined') {
    return '';
  }

  const host = target ?? document.body;
  const probe = document.createElement('span');
  probe.style.color = snVar(token);
  probe.style.display = 'none';
  host.appendChild(probe);

  const resolved = normalizeColorForMui(getComputedStyle(probe).color);
  probe.remove();

  return resolved;
};

/** Read resolved design tokens from CSS variables (colors normalized to rgb for MUI). */
export const readSnPalette = (target?: Element): SnPaletteTokens => ({
  background: readColorToken('background', target),
  foreground: readColorToken('foreground', target),
  card: readColorToken('card', target),
  cardForeground: readColorToken('card-foreground', target),
  popover: readColorToken('popover', target),
  popoverForeground: readColorToken('popover-foreground', target),
  primary: readColorToken('primary', target),
  primaryForeground: readColorToken('primary-foreground', target),
  secondary: readColorToken('secondary', target),
  secondaryForeground: readColorToken('secondary-foreground', target),
  muted: readColorToken('muted', target),
  mutedForeground: readColorToken('muted-foreground', target),
  destructive: readColorToken('destructive', target),
  destructiveForeground: readColorToken('destructive-foreground', target),
  border: readColorToken('border', target),
  input: readColorToken('input', target),
  ring: readColorToken('ring', target),
  radius: readRawToken('radius', target)
});

export const readSnRadiusPx = (target?: Element): number => {
  const raw = readSnPalette(target).radius;

  if (!raw) {
    return 8;
  }

  if (raw.endsWith('rem')) {
    return Number.parseFloat(raw) * 16;
  }

  if (raw.endsWith('px')) {
    return Number.parseFloat(raw);
  }

  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 8;
};

/** Fallback when CSS variables are unavailable (SSR / first paint). */
export const fallbackSnPalette: Record<'light' | 'dark', SnPaletteTokens> = {
  light: {
    background: '#ffffff',
    foreground: '#1a1a2e',
    card: '#ffffff',
    cardForeground: '#1a1a2e',
    popover: '#ffffff',
    popoverForeground: '#1a1a2e',
    primary: '#6366f1',
    primaryForeground: '#fafafa',
    secondary: '#f4f4f8',
    secondaryForeground: '#1a1a2e',
    muted: '#f4f4f8',
    mutedForeground: '#6b7280',
    destructive: '#dc2626',
    destructiveForeground: '#ffffff',
    border: '#e8e8f0',
    input: '#e8e8f0',
    ring: '#6366f1',
    radius: '0.5rem'
  },
  dark: {
    background: '#0f1117',
    foreground: '#f5f5f7',
    card: '#161922',
    cardForeground: '#f5f5f7',
    popover: '#161922',
    popoverForeground: '#f5f5f7',
    primary: '#818cf8',
    primaryForeground: '#111827',
    secondary: '#2a2d3a',
    secondaryForeground: '#f5f5f7',
    muted: '#2a2d3a',
    mutedForeground: '#9ca3af',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    border: '#2a2d3a',
    input: '#2a2d3a',
    ring: '#818cf8',
    radius: '0.5rem'
  }
};

export const resolveSnPalette = (mode: 'light' | 'dark', target?: Element): SnPaletteTokens => {
  const tokens = readSnPalette(target);
  const hasValues = Boolean(
    tokens.primary &&
      tokens.background &&
      (tokens.primary.startsWith('rgb') || tokens.primary.startsWith('#'))
  );

  return hasValues ? tokens : fallbackSnPalette[mode];
};
