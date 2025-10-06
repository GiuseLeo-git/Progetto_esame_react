import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilitySettings {
  isDarkMode: boolean;
  fontSize: 'small' | 'medium' | 'large';
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  toggleDarkMode: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    isDarkMode: false,
    fontSize: 'medium'
  });

  // Carica le impostazioni salvate dal localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (error) {
        console.error('Error parsing saved accessibility settings:', error);
      }
    }
  }, []);

  // Salva le impostazioni nel localStorage quando cambiano
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Applica le impostazioni al documento
    document.documentElement.setAttribute('data-theme', settings.isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-font-size', settings.fontSize);
  }, [settings]);

  const toggleDarkMode = () => {
    setSettings(prev => ({
      ...prev,
      isDarkMode: !prev.isDarkMode
    }));
  };

  const setFontSize = (size: 'small' | 'medium' | 'large') => {
    setSettings(prev => ({
      ...prev,
      fontSize: size
    }));
  };

  const value: AccessibilityContextType = {
    settings,
    toggleDarkMode,
    setFontSize
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};


