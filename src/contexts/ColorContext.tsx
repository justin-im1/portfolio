'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextType {
  currentColor: string;
  setCurrentColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [currentColor, setCurrentColor] = useState<string>('#FF6B6B');

  return (
    <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </ColorContext.Provider>
  );
}; 