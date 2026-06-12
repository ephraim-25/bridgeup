export const theme = {
  colors: {
    primary: '#4F46E5', // indigo-600
    accent: '#10B981',  // emerald-500
    background: '#FFFFFF',
    foreground: '#171717',
    neutrals: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  },
  spacing: {
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px'
  },
  typography: {
    fontFamily: 'var(--font-inter)',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  }
} as const;

export type Theme = typeof theme;
