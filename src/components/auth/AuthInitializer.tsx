"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { rehydrate } from '@/store/slices/authSlice';

export default function AuthInitializer() {
  const dispatch = useAppDispatch();
  const rehydrated = useAppSelector(s => s.auth.rehydrated);
  useEffect(() => {
    if (!rehydrated) {
      dispatch(rehydrate());
    }
  }, [rehydrated, dispatch]);
  return null; // no UI
}
