import React from 'react';

export const getThemedColorHex = (colorName: string): string => {
  const colorsMap: Record<string, string> = {
    emerald: '#10b981',
    sky: '#0ea5e9',
    purple: '#a855f7',
    rose: '#e11d48',
  };
  return colorName.startsWith('#') ? colorName : (colorsMap[colorName] || colorsMap.emerald);
};

export const getThemedTextStyle = (themeColor: string): React.CSSProperties => {
  const effectiveColor = getThemedColorHex(themeColor);
  return {
    color: effectiveColor,
    textShadow: `0 0 8px ${effectiveColor}60, 0 0 12px ${effectiveColor}40`
  };
};

export const getBackgroundRadialGradientStyle = (themeColor: string): React.CSSProperties => {
  const effectiveColor = getThemedColorHex(themeColor);
  return { backgroundImage: `radial-gradient(circle at center, ${effectiveColor}1A, transparent)` };
}; 