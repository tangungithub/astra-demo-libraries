// Design Tokens from Figma - Juhan Demo
// Generated: 2026-02-19

export const colorTokens = {
  // Primary colors
  primary: '#000000d9',
  secondary: '#00000080',
  tertiary: '#0000004d',
  
  // Brand colors
  brandPrimary: '#5250f3',
  brandSecondary: '#d1d0f9',
  brandTertiary: '#eaeaff',
  
  // Surface colors
  surfaceBg: '#ffffff',
  surfaceSecondaryBg: '#ffffff80',
  inputBg: '#0000000d',
  
  // Border colors
  borderPrimary: '#00000026',
  borderSecondary: '#0000000d',
  borderSelected: '#5f5f5fcc',
  
  // Status colors
  success: '#47fc74',
  warning: '#f8d33f',
  danger: '#cf2828',
  
  // Semantic colors
  onBrand: '#ffffff',
  onReverse: '#1e1e1e',
  
  // Primitive colors
  primitiveBlurple500: '#d1d0f9',
  primitiveOrange400: '#f04919',
  primitiveGreen300: '#157e50',
};

export const typographyTokens = {
  fontFamily: {
    text: 'Instrument Sans',
  },
  fontSize: {
    body: 16,
    small: 14,
  },
  fontStyles: {
    label: {
      fontFamily: 'Instrument Sans',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    labelSmall: {
      fontFamily: 'Instrument Sans',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    input: {
      fontFamily: 'Instrument Sans',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    inputSmall: {
      fontFamily: 'Instrument Sans',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    videoTitle: {
      fontFamily: 'Instrument Sans',
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 100,
      letterSpacing: 0,
    },
  },
};

export const sizeTokens = {
  // Icon sizes
  icon: {
    default: 24,
    large: 32,
    extraLarge: 40,
    stroke: 1.5,
  },
  // Spacing (gap)
  gap: {
    default: 8,
    large: 16,
    xlarge: 24,
  },
  // Padding X
  paddingX: {
    default: 12,
    small: 8,
    med: 16,
    large: 24,
  },
  // Padding Y
  paddingY: {
    default: 12,
    small: 6,
    med: 16,
    large: 24,
  },
  // Corner radius
  corner: {
    default: 8,
    small: 4,
    full: 999,
  },
  // Border
  border: 1,
  // SDS Space system
  space: {
    200: 8,
    300: 12,
    400: 16,
  },
  // SDS Typography scale
  typographyScale: {
    "06": 32,
  },
  // SDS Stroke
  strokeBorder: 1,
};

// 전체 토큰을 하나의 객체로 export
export const designTokens = {
  color: colorTokens,
  typography: typographyTokens,
  size: sizeTokens,
};

export default designTokens;
