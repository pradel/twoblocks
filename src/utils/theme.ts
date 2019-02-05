import React from 'react';

export const themeStorageKey = 'theme';

export const ThemeContext = React.createContext<'light' | 'dark'>('light');
