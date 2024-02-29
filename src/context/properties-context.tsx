'use client';

import { GetPropertiesResponse } from '@/types/property';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type PropertiesContextProviderProps = {
  children: ReactNode;
};

type PropertiesContextProps = {
  propertiesResponse: GetPropertiesResponse;
  setPropertiesResponse: Dispatch<SetStateAction<GetPropertiesResponse>>;
};

const PropertiesContext = createContext<PropertiesContextProps | null>(null);

export default function PropertiesContextProvider({
  children,
}: PropertiesContextProviderProps) {
  const [propertiesResponse, setPropertiesResponse] =
    useState<GetPropertiesResponse>({
      data: null,
      error: '',
    });

  return (
    <PropertiesContext.Provider
      value={{
        propertiesResponse,
        setPropertiesResponse,
      }}>
      {children}
    </PropertiesContext.Provider>
  );
}

export function usePropertiesContext() {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error(
      'usePropertiesContext must be used within a PropertiesContextProvider',
    );
  }
  return context;
}
