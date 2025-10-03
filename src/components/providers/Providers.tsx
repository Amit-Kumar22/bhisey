"use client";
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

// Simple Providers wrapper to keep RootLayout server component clean.
export default function Providers({ children }: { children: ReactNode }) {
  // If you ever need to dynamically recreate the store per request, adapt here.
  const storeRef = useRef(store);
  return <Provider store={storeRef.current}>{children}</Provider>;
}
