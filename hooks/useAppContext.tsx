import React, { createContext, useContext, useState } from 'react';

export interface IAppContext {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentHeroId: string;
  setCurrentHeroId: (value: string) => void;
}

interface IProviderAuth {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export function ProvideApp({ children }: IProviderAuth) {
  const popupCurrentMode = useAppContextData();
  return <AppContext.Provider value={popupCurrentMode}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a ProvideApp');
  }
  return context;
};

export const useAppContextData = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentHeroId, setCurrentHeroId] = useState<string>('');
  return { isOpen, setIsOpen, currentHeroId, setCurrentHeroId };
};