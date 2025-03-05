'use client';
import { createContext, useContext } from 'react';

export const MobileContext = createContext({ isMobile: false });

export const useMobile = () => useContext(MobileContext);
