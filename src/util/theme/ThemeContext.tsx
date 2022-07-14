import React, { useContext } from 'react';
import { Theme } from './Theme';

const ThemeContext = React.createContext<Theme>({
  primaryColor: 'black',
});

export interface ThemeContextProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
